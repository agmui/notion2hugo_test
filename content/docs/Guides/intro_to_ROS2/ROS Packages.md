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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=1129c4a1ed3f52fbd70ddc0ee5b44ef612bf8369ae12274eaccfd1e54406eceb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=4ab62b5431631061a2e172df6438bbdd7c4b373e697d134865abb5abb8e73558&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=e5bbf44bc2865f7fac87a1916b9a42f448dc6bf022f13432eb6d6e810e196d05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=0d23cb599925b58136c435f25b1d952672480c506ca910f11b81fafb18a47f17&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=809611673e20c0b3c28fd42417a7dec882bfc7b00c4b4188c678687576d41116&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=15c34f5ccff278e82578073dba4404b9b1eadf6ff51cbd9d894295bc436aab97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD6D45T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxhh5QUYQL9pzrd2OQx0nUtN%2Bjh%2FF%2FULV49GpbLPikHAiEAzDQ5lCIyivvdf8a%2FoUEaksBo53nzq6q42B1tQb3M1PMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdSsCUVBMsqaq0FRircA67dFqZcVsrkpbasaHSOihTXusN9UM5vX1y1TivIFcoNGil15fzLh7kI5341zWYacRw4cUaiSd7Tx8YTI1M6WmoKNeGHx0Trxi%2BQmtxt2y%2FtWKOtvI9vAdS0T6U7tCvS9BKf%2BMWxTeRKAz7MqZtdaW3ys3cDRUqaOWvWbBc5PT6vp2Pkl%2FDW4VghkgyoW3VN3R3t1%2FtuqFv9TKyu1sf%2FbngKm0ApV9MZaT%2FyrXdmkJ7Zrc6SIdVuywqoZc78qzKEDnmh0r45FGomFJJbyNhGyHNKWDwDkzsL3TkmMLO%2FNi7szNHKKWQQobYoglneli91C2pmaTrjTVgVgw7Ig%2FycCkZPgWyPbt5gqgriR7oujIY%2Bx8DL4iVcxGkxW%2FJHqQQTvHNZR830OTPtri2x%2Brl6A92bniMrZO28IVbkYLMZhfBBhtAJF0wK5GvW9YyEbOddg6u126ywuNb5MIamW2K%2BJ1zleH%2BTWgnrVsas8jYqHgXG8aBjC6FGNw8V5x2%2BH83Rr7h3crxS8LRRbdThvR0YG17lSSKeIONFGhNyx9FV%2BPHQtOBocHjOI7e9uYN3rSGbf3ZwYUe%2B%2Bw110rD1xMeaH0nL3U1uE%2BT882N76E9HNF1aKaNKgwtynWMtNrcpMNi4jr4GOqUByT%2FLUvaDRbFTRmQ2aoeX2RVBXdxOq1uihEcAMhwbxGL%2FJOAO7swdad%2BIcG8WaxgI1mN0b5A3qYBkHUCH%2Fom%2BAo%2Bb8BXJAG4WpaGyR0ekKHzpzX5tupPh2AfmIp1UbCeONBrMGIlYIOzubm6MSDm%2B85qNL0A5MR08xVgJ9iYKEi4ZcvI%2FRILFarF5k260EYE9x43xLBlsKU12HkKe%2BOuz1if8%2BHZo&X-Amz-Signature=0fd259540e8ee5136acfd4274fea179dc2cea09aed221efc7e32cd9616b0530b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
