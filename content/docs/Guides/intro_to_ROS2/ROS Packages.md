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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=3be99343d40bfc7aaf5ac8a7f121cafdc5969e88a72f2863eb00aac5bba05d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=a0a8abdef3e184b58c2d3c5446f727eb7791054fabcdc0abcd8c1e7e3cd77db8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=42ffb20c1a398738a91b4bb17798438432a5ce0c0b85db504950aaedacc39c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=9ffa4b01a1a7c0b67636d3e0935a23c1854fce85904162a0cff281685ad8b83e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=342c70abe7406bdc964bf313241d853fb38ca48692c5a87cfbadf7df48c09da5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=dce3c661334333c5310f5a9bad73c6d72df5ef42a51051124c1ec43d59270427&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJX733G%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMJJ7S2zt7MuyxlXawUrsd5zZBTIF3Mx4Of%2FT8kmeA%2FAiEA3iKwwAJx9Jb054HZCQ0hI5e5j%2Bx8%2Bawe8kvdXqHGINEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCgL%2F9YYMxvMDl89KCrcA9Sa6zzYs1rrXCcT0NhYs4Fv9Hf3UUcPSu18h6YYWi7FNGGQXhjhJ%2FewXnr%2Fufw%2B2EbqJL6ApwkfA1gZVn23xkO5qwEIKrfLNBUKZvHHwIKF1J%2B2vC%2FwbFeyvjrBVfQsW61CmMYNcxxWQ9mmoiqTe3coZ9UxAuajWuGe6JvTTMzNwldVjrqggZrT6b3bOf444ApuTAigQSKTbPUFwhzFq5k1AasMehAV8loIqblpqbaZgPeGJOtwZ9ZPpK8DzDAwY5KBE3PYyGdJCkrrH5pTB8HicOJigSSR59c%2B1dycB3xO%2FZdbEgD67IAJezwzgQ0jBuPimZ5G0AyC2ByWlH5nbXII5Dtft9fX61WcOz3cFqMWM9FEzyKlteGMxQTz0HtKICSHFDmOndpcpPkZ3JTXgzLlmeI0bsTBikvO3K%2B%2FDNn8PpUJcHl35db2ENYe9kc7%2FkGCyycKXsltcltB2wg8mjIBHlzsRwpqyykx7DSuzblkyWw8AUuaSPbE8xptfO%2Fs2lPwNcASBca8i%2B44i4bm%2FqAttr2W2sRzPWV8z4h32SUUmbfx3Ygfbt6Nar5YSn0tnqGwmQ720o9b%2Fo2aar8F8JHKwABKT7jHeLpzy6cHCrciOkJj1YMhk9LxLlJnMILa1cEGOqUB46TJmUv3Xl425bIjNzPwgU1%2B%2Fn13o%2FPjVzFvBRto3jYXLyEbjBDbRb70uMCl1SRE7d1Vv3uDJJ4JVlJ4jdM13sYGQdnMZ%2Bc%2FLOKfVfhxnCrC4wI3%2BGNIqVVtG8dNOYupMHMY86tAqIJIMJXyj9cyx3vQ3l4iisymIAkRjuZ62285kYYWzYYp9R63AG1685s6rpnsrWDiqfetKn7PC8O3i4Z4tPAS&X-Amz-Signature=fa19c1fb948a8fcdc9547e0d7df883424c0d0242c7058b6961d28ee03a7667bf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
