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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=52e989b0029072238d798092e86051f6481884c00708d2f6a9d765a8b4441c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=ce68d50ed18a692ae4703ac5749ec243fcb0d9dd19f3d12f5296d3ecac794085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=66c98e5d79fffa78c656ef50f9e03655f02866935ed4a7282b79e9ca76241d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=94286d6c5d1ea7981f5f8c2b0bb493146d99622c056c1ed03578cb0f5586cb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=608e9248f02e9e96e27dc47dd300c1525534017154a830f3a381e8419f42d298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=000da547414c10d1cf7bb2a0ddcad6f5eafddab051a7027c7863905876affe5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYXP7AE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrwrwRVZu9icwDE4VwYsICqzMRwsUaQaw80F4WNvbUuwIgUdZv0oc%2F4M3EpIr2%2BDAeB0rgycPRJtLUFZhL0b6I8Y8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVnMei4wAL%2BNjbiCrcA%2ByTC7wCJ4gVYzlQnSdeJZTVnsafYA0xonFQ%2FkPcTIIb6Z1Cu%2BNuBJdrRTLHr4eNpj97mskub%2FQPpSqMLDokZNhUPsALdlOMCbEDkex9r9tdhSmTxUtqQRZdBjPrGRPPsk4TD8l8mehFATh%2FATMbvX9W9p46P8AVp06KauJwOYNsPUMzRJQj1XMzFI%2Fe7lAu%2BuBl%2BI1fBrIbb31pVTSSrCjKDTGap6uYBW5lvZIHUF%2BP7Tb3iQS1PbjHbto2pwr5d82jiklaMEjc5xqwq1TVjhzGI2aS%2F6tukPZPAMHFEAlXxlnECNSMG82nsIXCowbgiQ88AyjnMaBaHV80ez2B%2FkstTBxB4La5gIznq%2FNVu0vkYCJnI8yCNlXPxFCWptHDeU%2BEtT7SxxgBLnvKWec6%2FA0Cf4Wl3HV2baKAQdy79JkbnqdswxjbOjE9iKv%2F7l0yAWUgk%2FrjwSFZqYcL8V1C2acSclrn4P1b21T4vkV%2FWt%2BxnT5m40T9OyTzXDxgH7OQ94plDntN3iD98AhqKnUHxC%2FZsGlmGRHAEA5WfEWNkBq0avVKYm7RrGVHiTaH9FxdAbt9rSKC2PKxGBshG3nFqnvXPSYbJGfltk%2F8bPCwWtAF0qVrxYQWc5YgagRJMMaiqsQGOqUBS42JFEk8mVtjD8%2FP3GLPX2kFey8ETz126IVKKqHKxrS1YFQlKa6UIiyg1sWcEcZz2fXT0e9keDF%2BnIL9ibWpfr%2FFB87tqSRAw0QgQMyFZodzB%2FTeo2z4A3BX6r1kExZgaVP%2BQXdr4duooG2OJBNLizbyPX7xbfXsi5yFSDBEXICx7tV1Z%2FtEJ63YBgaUbUieOhaCOiUIynRTWNC7ACiGV%2FzRYcCI&X-Amz-Signature=0789398b076618e167b3ee4bae0fe11086eb35e80781eb1768988cc109180dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
