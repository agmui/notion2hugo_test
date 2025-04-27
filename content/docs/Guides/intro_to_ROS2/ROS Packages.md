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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=9ec507637ff27a44c04408159c760337390f6cc5e831494c8e80bd0d737ff920&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=5389fc9daff39de33eb47edfa04b7c66c227b50a442e139031273ffa337aec7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=3626d740b0ce3df0a85ccdd08fa919189cd8f197eef21fd587c3d77b6b5c6488&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=b63d1bf31f1e77b35a3b242da3895fb52237e03590dc2c144490413d4ef1421f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=361a69a4e37ad21d01161ca76525902813c513a4e891ff769bbb5b947b6fc546&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=6f1dc055fe282593dc5ec8d39f55803c8214d02ac2e7fd98dc95bd69fa1b7755&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA2ZUA3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O40kUE1OgHCGgxlqY9qDspufa3GMep1oXSVJl03w%2BwIhAO5VYh%2FoJYaxFlYp%2BDuoL7mfTRGFgodINlVyUedUozN5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwUdpQkDWgWQTpox2oq3APLholuFSH6vkCptIC9%2F23U24b1pYLvMHpuLmmLuV6s2urshcJBA6VholW9o8tqLiJNkK%2BN04SU2Tuc6%2BHINM9std77%2F2w9qlk1ixsaLdlHteWuIAsGWqlCFlBKIfauf%2F8VcXtBXEbJNusYkOn3LamLVTeT6h3HwRd8c3F73GLvBmymsiEwTHrATWzY%2FJP%2BWLH2WIUV3Lmn2dkpZA6DDy4WSMgiCprmpgsQO2lZbTm1Fejr6Ckf%2FMDclX3jdMaGFpuVOlq0pnpJqqf2H%2Bs%2BsUyQo8PhQ%2BICdBiAJj%2FrN%2FxFJ3naOAD8FgTdkL9FWXzyKeYxIe4W6lY0AGpxLUkhnaYjeiK9MQqu1%2BWANRbQDkznPcReKXImK2HRKu3juCVigaVY9SifA5BCnmKNwULiauu0UyOaYL0VgxZCM84%2FEEhGryZRHyI9sZnpt1yK0fYCnxM9NFNct%2F%2FC137xW8LcbmSeUtz012xWic41KFondR9fiJw0AnBrymwJyciwCnGIP1FEPHrc9BPj7bJnMNmAkAywVxaaEd6Pp4bSRYSnPtK3Kf1VVQnvLzW3dq%2FTVbYdTszzg0pn%2BsroH6CD%2BnHRI%2B7oyFo6%2FMeVoxwCp4AOxZG%2F%2FoXE2b1c8B0x4LA38TDv47XABjqkASw1EKlHC4gai86ipEnU4ofzUUMhzvevWKe7JA6IGGeO6kFFIb55kvTtb6GDatw1CFyPfZrTduD9HtB7OXOdKe6nwqYbJNSQwjPRwK%2BEn7pjEJHIUeM%2BEZcNOl%2F%2BJsqnmuXMfZaKfPM3REChLnxNcTF5fRh6BumAmE%2BAOyS1GNCu2uNvaX%2B0H7Fe2frXdGePimAEU875%2Bl%2FWXbS96D8xmVQH1I0F&X-Amz-Signature=3de81ad9a17a9db3678bf09ca6c3a7348c36ccc3bb0e31a14e4e44d8ebd96fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
