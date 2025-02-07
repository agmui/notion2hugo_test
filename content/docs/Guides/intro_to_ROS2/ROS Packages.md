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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=9c3aea8fc3f33e26bc500d7356216120b093d1999a1caa78f1fb58439e1f4370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=578011af50a01c364e26dd6213fd31c6d0073aa0720a517e9f7bbad25d0e53b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=b6e4a3dafc3621f243352adb7ca290e72e2aa7180a7ca88fe22d58dd10c1b6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=9066a675e902f1b90c61a6ea828e948f2aee5aea11c9a9933c5573b0470e761a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=59acfcd4e35c7c1da9afe4d3c4b1b7b5734a3444d8c672f7a46fd9c9e4cbbb31&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=cb84cfc7137ea1a45354d03930af256b30d29fca5f339436bbc38dce061585ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3BKCY2H%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGwwLPJ93L%2BwrmGS%2Fvyhdn0KoZ7qtH011XdFzB2GJDg0AiEA4VS5mY9Guf6RIOgdyMy%2Bk4bTzht7p4gbxOeLkKuf01wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOCGd%2FRE6EfaVAL6gyrcAzLjSDcUAmPDn%2FFMrdALqHvjjDWhDKd4hPwEm2FZLLozqTzfjUfz5SMIVE%2FhMUA3%2B5%2BQqRxo%2BbP%2Fp9Le7TCjpzwGthUzjN7AesK8feF0pKt8tkOZ20dzFY34a4meP2wMw8HEjEufQ%2FYhPo33Fn72RZpcI%2BqwXVcvUiUUbQ%2FjPKDh9l2eB0R%2BfHF5tSeKM0LOzer%2BLIzVYKS%2BM3RIHdrrgJguEEYmvz0uqjIxQOVjuN6%2FR5VpAEVS2AT2sJhMyHZGwW6Cur2uRTT%2BZ8uF%2F2pFylNHubv%2F84y9HoQzIFvnGpYe%2Bw0pBy503FQM73j7BGejRKkg8peUR2fXR9qgxvI7yRIzQ9vQURYNOqYXcJ%2BP2sfVFbEt8I6ISCLKdnYjj1Hea0mTj7r5wzbnCDKiiQR%2BTaBWegUiYR%2FfpCFI4A6gTeISc3ZM3CVeTUqG7Js4WBP1KcA2jnY7DoU%2BwBkmICXMCj1oXXcQlZQt3Kbd2aWps33DtFG6d51dAMjLxkN8u8JFnRyr6t0h6AJwiOIR22LfoHfRrO%2BCVQID0VGO%2FSg7TGBl5%2FTv0PfMEPY3p8u3zNoTxUuTwL0udGo%2BeH5YypsVnuHDG4cuX%2Bxd4qdhyw7%2FYsRuIW60GWGrvhDOpVVHMMT7lr0GOqUBjuM7U6%2BfssM1rbE74Tz3L3rySz9S2TozA9inyXDpPW7KZjiah19jSqjxaOcWJTI8y%2B4rRCazyFtBITOD1t%2FTGdduZjZE07V%2FlF5LAltlWVV%2BVMci1nW01UKAf30GHUKOJS9NwWQlSJQ43myVUrsS6fS72o6nKvNLkZc8FQXceKS44%2BaypTZeWLSs2%2FcdfwmEli3Us5XNUqCxBYOqR7FjzjJ326rN&X-Amz-Signature=67a2d681a2d6d9f032e60e23bedbfb508396d68f1ec16423bba3981108e2b695&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
