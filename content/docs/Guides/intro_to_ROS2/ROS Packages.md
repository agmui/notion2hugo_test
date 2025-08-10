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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=cdba277e5c31b52a0a59af851c3b700d36c46832d31f6a0732d28e50846149d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=623cc111c55418a35510653db042336a84861a408a50b301f85f0247d142c1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=5399aae91bde9e72460a77511a1ca13e5d9923ffeb3fa29d726c1f9acf5de691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=bf19972d98136614a535965f2e299cd4884cc35050036e5a163ef83a4a6fbfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=0a4ec154712e7f648456747f0081abeff9ca23d08f3c93b5a7b0d4e2efa28715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=31e3b674973da7763baabd226438cfef828179b4ba0f568696502b0328f06076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4RNP27%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BJKdeLXkZMM2efHq6hCnFNTG5Pw26hw9AD0j9GF%2BKlAiEAqfPaYIcLLVM4bYdZnEypMbhUlokScjRkPRcr3nKpZG4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxKZklzsd7T1sfczCrcA%2FEtGJxqaCbZeMe44jTeMZSaVWlSnVOlvkL%2FSUfug7%2BUf8SHxgG6PO0wNkJBqg%2BcaFKOjLJImWad6BrmIZ%2FYadvfG8zGy7LSdJCfOhMkVUbroJBdUidfV3VAYB5tBIXILipXunK%2BdFG%2FzV%2BoSSJ2BchFgVzyIEpdN6BbARGtwczKzebu9mEnfuwjP71DU4fMaC2NV%2BiPJrVDRMuk%2Bs1AO5lXZPa6O6GlNasY9n7Y9plPH5lCOJ%2FfklPxwy1HiNNC%2F0q00GR1Q6NW4SonHrWr2Sn05sOKuS7yhHRyNJHA5m%2FAqv3zyNi%2FBteG1bKo%2F7q1twQc506Kd750%2BaRKFKlLuBec00ldxMp0ezMew%2FrH3SlW5Chc0ZMv5dUg4NEKo8UO%2BTkf9Wymzb7pTatd5j4fsUYOYIx0VIZib%2FIwM1YqRKpZTC6Mm44p08EgB3zntRmHSBqebvSoa9hHy6xAHshgzxRvG4CAc%2FIk7xqgvTSPmxJAMb62%2BHNWWbvSVwN92fPfKnQqM8wZonzSqCwGaro%2FCTS35LTYlf8vecKyKOFgIviGni%2BUFyUCTdBMmz%2BOJDVyqOmSbvQjVgVsTSPPEKN8LYwHx6oQtftyMZXFlLwHjEf4BHWqiQT8nV50BaW%2BMP%2BY4sQGOqUBadSqP7kDjw4TS0WPRHReMyrRiRFtoSiKPEsiVzObXTHN9FnZHiJ05MqZ15aYVvvQbqJCcHnHw%2FjegYCn4lvSj8ptrbKpa%2BHevlN8sYTjkQijNJFSJbo%2FU85PfgY1uZsHUZnTmQhKN%2BE523EU%2FE2MnwklFSEeXy9tkf3o3e%2FdojfF1hXIoUpyBKTGCpUXXlAFKoPHOsR4Cg%2FP461PT2KbX7oxY5Wt&X-Amz-Signature=f9b349e9f3faf8572d58e8d7c22eb082cb7b9b06786bfc5ecd66c20667bb0f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
