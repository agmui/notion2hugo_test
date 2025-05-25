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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=5d8d6917b241272eddc11ac7dd5d26fc10324f037cedc5385e80506e3697cde8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=484ee22b35ee17a55c63faf23797e277e6ef1ef5182267faeeb4af2d47201192&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=9c91de8cdaab216c1ecf953f4963f9e173186a1815d992335360dfdd32f9d0db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=4f4d576f02cd90f3f879447eb00d30ddd5473910d00badaeef0f0f2c4d258dee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=7327cb13deb65fff4cdd21985f9f4646228684f3859f20bf8226d9c6716531ad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=3d513905837105803b617853ecfef45b41d319e1140db4fc1ece34e7cfb34717&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ7ANLB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC6pX2G2IteNOd2%2FT%2BQBS9HPOERevrfGVvIfytvra09YwIgRcJenQcr%2FpKZI9R92AbPQTsRND2Z%2FX3Tv8qSQt8zVIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD7szSJedYehnk5MayrcAzheFdOGyIL7%2Fw%2FGMjAr5YT390GgQ9r1IezTVt5bFDoLC5R396OdjQOzNV7%2FZdJ3jFgL%2B9%2Fmqijdj7zefIKGw5M1aWZ4lTWFqOdTLcPphIQv1yrHGCOpyn%2BHbFLXzzvGivUHvGCdKVMEzor70ypUYCa%2FSfLsjmiBgOKFMrT6oInOItFe5MKG1sT15FpcbW0svu625LlcJ4XfdZof2TiqRA1DzxK%2BZvvELzjNR8YFJejc34pMi7p20BiHHdhjQdxD6fNjaKM3hG9W8wQL6y1jLkld1kLR6sErx3mofsnSFg4VCmnVpJ6v7H1XXRXFBcMmx5Mwl3cmTTHsGHN5X4Eh92KpSeAj968l9ut2H1vxpJU0Ya6Ur7L6YmWzdVVWpHbPf6%2FBK4s%2FE7SQPPrJewLBj9ch5dFzUlSMF8bOkQj0wz8QWVnNhVRHZugicsnGfuxXFiiYdo4P2F%2BEs5DWzMH5FS2A5WD0H8sxQV1JjE6%2Bj4Yo88STFYDjaaJ1aKB3Rd5bQXvJvhAXK07UKJ1t8CF3JBDQJCH7IupbFlaPGgXOxZtm0%2B5Tv2IuIXt5cfL%2BztgRNtMdM0guDRFM0MOZ3eP3if4wIIlPJlHBd%2BRB3tz3lxB%2BGR2a0Lf1C%2BZtM3PrMJyYysEGOqUBBQl656e5re7pE7R0lVd9dVI95maTlowEz1l4aS6VSCSR2DIc2M%2BDxubBm%2BgkWtA4A2qkKj%2FRCp35zj65PjyY1NE%2Bksuoegg6FHbeJpfNkP4siQCoUBfL2MlEij1nGxOMKiWgwnLxLE4Hq94vA9WUZ9h1ZdW7pj0U4VYz8aY9AylfNp%2B6FPbRR4RK10OpxLVh0j8QTvw%2BGBtjXtvejRTmEW1y8tEL&X-Amz-Signature=d03bb82a37ecd6e0af1041d4f43409771bd6e6adb95891e259b8d55d208c98bf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
