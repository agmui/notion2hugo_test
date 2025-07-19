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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=3f10c1d91e9fe714583e2a585a7c8cb3f7de8a6967ac03984ce69d53ab79dc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=49e13507a9fa4750ee9659554f1b7d9a71c319f5fcd3cd545d88698c45b8b409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=9e02b183d9fe1828293877489147dc7afb5094cf6e16a2afe03b4a79ee7dd310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=7ad5f28758504928a0ddda83bce4742e484d6be9972bcb8a4d96f0fa28933a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=365beb8895e34d29bf799895ea9d3338e745945127878afc7c36a5ce66d08bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=72d47f763f09dd6b97d4bb0edf6dd49006f1742976b6bc5982c705c3a3dac2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXLZTTF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMZryslayxiWtdHur7FThDyuELqjjZ3N2RSgFMXQ8cbAiApoPa0MWUzlFRfgFC%2B3hjzctCdN9nOkcVgnIWfjWqakyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKR91q40nigpJFLh8KtwDQ1TocgzmK8EDgWNHCx6FtgKDiz6M03IdrhrqKXERJyhmf0qdE3EjnZJATmJtF9DXU%2Fyx4s2v5MxdqdRyrOLQMWxKJgwHBxhodtNo33WBHdvIeDr1ztdIhMe9lq3q4zSzO3eGVZAFDkSUIX5tJwtRJfgap%2BEX0BcPExE53Kw%2FhyAoCLWbsKT1omymWmi3FLyxFSVAOeVEhY%2FY2uPtPNvNJqgSK82UrDSWqJY7%2B6byB6K6za99pfz%2BboKsYLaTUYcDvV40oROyN8IABm1INDLLkcKOExlj8OHUArf%2FGnm3xuIO3OUG3Xu3npoJMk%2FvXskWpV%2FQDprLWkGPdrEDgmbHF%2BAsvgPfUsYsZaN7pNBF0P%2B8vkqyAqn3CP1paMkv%2Ba624fd5p7FE7LIpNwn4VliDqUGewDHMT%2BM%2B6wdi%2Buk08pT%2B3bfDa1Kh%2F9PvY5u0u7fx0MQ0c6CrrH3h8Ecjub1%2FWLNUUofTvgEjYGF%2BTy3RUNseB6EX4Wd7p%2FYfp27Ut7iY%2Br0gIF1nUeKJvEIDGrmPWtasc%2BczlBNKFVgtFSXi%2BxR49XJA1LJvYt%2BgFlyRHGBZoYBQL3KY4SwGgS0A6wNMXK6ksh4wmjYa%2BOoD%2Bh%2FCtG57uswOc1mo7mfvqAowpcXswwY6pgFQZntkjcsVAdYB3aNpnowFXJf1ZzXw9C3Kv4vho3XDA5mLZru8FE4Dzt5GYtJwmEUquVBFygC58xW8McWJw7ssatu35T17u%2BgGM4pO9wDS3SFWKnHfumCvJxJdpd9pQgzeFl2GK03jWglSiuCW3JHd%2FoxXJR2jKdyqHwHbbSRUQWcxYuwAtwR506TPLOqjbFvZhVENyadEq0t%2BPObZBMfGfVuB6B2Y&X-Amz-Signature=8b793bca9e9e1e96ff3578d02ff9430c7d349757b0549921b681021535d14ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
