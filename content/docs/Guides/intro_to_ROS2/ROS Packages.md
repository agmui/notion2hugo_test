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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=eb64bffb12782bfe3c2b9d5cf6fcca55c380ca36f01e52a7e6102bd259275e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=cad3b75bbb55f1ff7b07e9829dc8688b4f171205655885a8b539c517f8068fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=1c6da50cc91afbc4232bb9a1bd4d06c994a6d4303923346e65bdfc9ef812a628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=a322717a15e8d9ff2ac104ffd46f7b3dc561b890ae4e392e7ab93aa2f2f5e697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=5a5b2d1fe30706854fcd196b0aba114e231348629aaffe56530027a3e21e3931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=180477acf86ed20b92ae9a4972c8e99de7bdc50bf8cf1b99e28389f0b4eca00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3M2R54I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCDE%2BPLhrIuQOm0fdnfESeUXkxPPj%2F1jQKadyVe7KPwIQIgF1VuZRn3atNm6a0fOxwMLf8soSLbY256IwlUDG%2Fpl7QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWRUNjvYzyV6yEtMyrcA9LlabOun7Ant9aXZlqmQplUm%2B6sPAkiNN2kd2jATrl%2BwKIqXYXcWR2FLRyZJMRP7us457Lxwh40882siB20uPyio6HFRaYB3oYCqRSGuoSb9aQ%2FjILTf6Vy8MpDFvveXEP%2BA%2FLWeA9PkX9%2BthrjS%2BhXCNW0Z9QEJQiVtpTSNeX2OOe66DI4PLC24ApPj1gO%2BYbtXPhoOyQjqTgI%2FpxXfDRzn8%2FCOD9ZAhVAqljZdDLL%2Brintdl%2FrcKttCeZX1TcKtuJ%2FmFq%2BNDP9UY%2BE%2BtN%2BAgCl0O6h5Lrb4xZmaj3Ely%2Fl9QSYOuSOuOqz8gERI3sdzI2Z2h4zCe%2BkO3HVqlB0%2BckqaH5urUdk1xF72wFvKJpeupjwwYdnJuw5ZvECMDyjJuwlBfbRxOMHae5uj2X2woqUw%2FiNSqp8YsHoOQzEPEW99EmgPlWDYyEf9QYwocTRwWcwwBc%2BemLZnOZH02ij16Ne1kapdlYqLC3vvcGyetzy2JA3HKMPmEumkakHpeT2MYc%2BxApUceM%2FCnSn5RJd5tXCvaJR2DGRWoolVlpFor8tFysHSlycb4VysfBmr7%2BLZC4izEWi6qk5LH8wvFVHA2fOPXlnu7aARkZv1w%2BH0XVknOGRQylBX8AnEv3ML%2Bt1cQGOqUB%2BnUYfrbYqtyN%2BaEq1LhQrZI5ZHCR0M%2B2cKwV3vWvFEbnWNtwiPIVL42vl6xmGMZ%2FwrZYU%2F60nACuVARnvC4LO2%2BHXbqyHa1a6bk%2B1CwnE724x%2F5bmeLrZALqK3FAUOzUzUovgP%2Bbugl%2FjUTBAYUXIQsI4FJv%2F3m1Ow2BiwRjTWqSqG24Enp2V9y1jj9%2FmqOEKX6hM4R%2Bw%2FvIHeztYItD%2FjNuMJEp&X-Amz-Signature=c6c950eb78f703a08691468a2840777bbca48b6d9794308a072e2e1fbe4b9c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
