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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=d8188529be3ffe714396d91210ee6671b4064cc92b0a62c7385f0c54667b445e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=ee0ab8a1f307a0d6e69f466631ccc1884a3e927ef9cfcd3fb4ecc20a738c2f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=7df956aa9dc4c44abe7c7584ef7a23d6c4f76c83cb3a68df0b8512b9f50d9264&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=04a6bb9b52a23c6ee06b95f2874530ce86ede46e1e0313d071b7b30edac30193&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=fc384991780bbb2af2cd8121f9ed7e9ca1709418d0438322bec0878f751dc1ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=55f4fd031811f4b2a445b2e1192d2fb0856788168e6c5d492c984aa09ad4dc69&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=b53dbc0c248fffb1f08c68b8b50f53497916728666fc32dc495f5019850db868&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
