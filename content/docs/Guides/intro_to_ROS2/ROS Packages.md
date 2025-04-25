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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=1aef5f74223975e8384b97e1666ba74111b1588371ba39681d8d63c62bb7c01d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=5a2c17f41483dba329d5cea6a027e637bf1bcfcbac7ff7db43659bcc61d409e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=33baa70dae39c754626834af7453a7704bf0ce5797fb606ff0e64761812be059&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=9b455a3e2cc33ee77e80eeb8bfb06f93f48add3ece9a64ab84e1b89a8df6bdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=a0902047d687fb1eaf7a1f52faa3923f386726db3f91a76bfdada4d17baa328b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=cec4e6ff3f328e8d7b2d7fac078a0c464ca7f2329151aadaadaf2c3c57e8ab74&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVS7TUQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXD67g%2F7J%2BRQXQS8Vgj0Lqurr5%2Fbg9Hp6d6f%2B3mrfPwIgZ4qh2uazxaiwsnRSmzhyq%2FEaT4nv%2FxHamMBqZDvwa7Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBmm37gDkA3G6HckPircAwJliMwMoWmYCeD6P8SjI5uoFNmqo%2FcD5BZM%2FcOyiZaqScHmLF%2BDErFXhwS2f9acI3dnj%2BxhKAD5%2BmI0QkrzyNWmeb39wc%2Bopg%2BqMc7lmNEMdzAQCE0%2FiR1hTDPjrSlhM44d%2FuXkgfy4OLVXJcEmVbdWUxRIrCYJUZH8Sy5qkjhcZDYeoFU4i%2Fa3iwSiJ%2BJmd797VZKK3ZIU7QRvRzPeim5OHwmSZt4ywKIJPZ%2FRQkAB7lBu9k4EEO6vL6V37Q%2BY52Z3F2vgeUI2yCBrqbKkbhqe9xL7EKACE07ec6kjveoSvZGAvej02iaqhY23E7sKHQ5rngYyq7d3C7ilKhdiYlYi2pmW4qdkhYuU6Y46OSWdqfuPDZStDr%2FGQudUKE1lKlQeF5qtlEyx6BUw5jgiXitrW2HizmMMkAOE9dXgWQOv6RupSkDDTYPfTN%2FtlscwZVe9jWUhi7hxvroK%2FfYwxDsq%2BOQtvkXNGvWGqvECth1AMMBM8Obn4Obh%2FfKQhyVCHVF%2Fl4ID5TGKKODwyrgb3v76eOFil1201Ompz4kNy%2F3KeZ38G1wxmJX0dY4%2FZ5GHjn7DVF61IkupWU2lKMYwAv3AHsfx%2FEffdp%2ByMFdn2kFANDFycEnM3rgZ99VJMJfKrMAGOqUBAibAqMuHQYE9gFhAS4uvfTJwjLru8NB8wpPGAuSKQT8KLaYfcbD4hwwhRAZD%2BcFkTfTarzyrgN7cNSfTMFvkf0%2F%2BJGxImNxYzklr4hLA74VB4fLV5y87l9%2BeSzerAjn5ovR%2FhVIzq5PQqK80X73ldfsOpIKO2FVlZo%2BdS4SDY080eR05fJBMuNaH8rbX8%2F0ziHm0prQaaMYGSAzhQuQIVq5I5S0U&X-Amz-Signature=f9cd99a6c1a5edd84a64384086feb090201f5455c073962ac4e78af3b3731a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
