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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=c98f96b771de3489cd3190b796c10b5fd84693955c0daffa7eccb73c24bc8a92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=89266af4cc4ea5db5565d92c6df34d0954be3bba002fb38b0fe2d5bc84ad65ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=ea3226b6598b93121b66094fd2fb1d169ef6ee2f75e33f74f556f789dd6f73ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=477f20f24bc0e539881200fc51ac01544ea03ab530ed863a2cbdebcec36b20f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=ef80a92b9ab801ed11b89c3b9b1b839953c5199f92ea2b4cb88e68923c784bea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=48e92e7a6d28d2dbd63f7e933b4f3765bae7efdb8fd743a3e718b8bf884a49fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCLAYK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAT6%2BjWibba8UDKhBGgDNAOViAX%2BM%2Bh52C489kWQrAUBAiEAoe0BHV6JXjHNEOVuM3Q7igWsl09kLWjur3h8ChVcmQEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB%2ByTp7W4ATX4FEsOyrcA7TXnnUjOZUHh%2BTNPIInPM44YwAFHGvX9F5f0XqaqRxInjLwJJUFHbRQXH1vBDqWdB0enSR4dPWV07j%2F5RczpifTozNVGY7EBV8bNnik1uXCJeH%2BHfn3GRrPwSQFRuqn%2BTHjthFQMsCeYXQQc9bgAxYSYdHNf94JA1QX6N%2FCQd7hm2YFlxTvUSDWvD4zek4C3o8IpUXhLTwpgGyfzyj8A%2B0klesqTtdzTCxQE9dkISnVQs9P6R3ju34DmdB5VteUWvWb066gLRvkH5hO8na9KyO5pu8pfVKD3ZzurtmoTvOYSG%2FjSsGM0zjKLZM6D2oZzE%2FMgba0Ig4g5YtoWsv1OR7U3yR17HReQgVocKg7bN8e1sTNNuki9XfpyI9t6jK9wPEmwaSEQBZi%2B7wjXb%2Bjuh9ZIk0c3SOJAfOJH5f80MAOzVyTJF4bJwkJ20gYqIGWjUy%2FofymtkLIplqyVPyaj0pRihOUG3X5Fzmmb6X9p5DpeE93G9%2FCU%2Bad1hP%2B2zy%2FmQgXg28suzGAE%2BTyR%2B7Fkje%2BKStV39hwITSOjK8m7XOd31mo5sdp7I7OjmwBvhOeS4ZDnd6AnBFgtSoCTTRXJQxyZgzqrsJwVxX5AEQOWhW%2BfK9b4bjtHflM2I1eMJ2mzr0GOqUBvdhk7rEk7kk2ovo%2BnVnxXJyXQmWt%2BW6df3JzvEetmJm8yCJLXCBdygCpxw9FHZRd3jG4zeHc6LJyeB5VV5OZaXUuijjRj04s%2FNERqoY8izUpLa1%2FfGf31B5P1C%2Byh7beK4310wbHu6qRqDwQgqEd0Cbp3R1CY9ahJI240ZVC9VwlkbKtjBjumBTh868pgYKJUrm97f0qkAbrYZdWUOxLhPMtlrO3&X-Amz-Signature=35944a31df08091cdd39e3e99adf5ef2802411c0d7b37822a252e9f5eb93a364&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
