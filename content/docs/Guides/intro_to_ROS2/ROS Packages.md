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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=c24d2cd9949e11aa69fa04a67bdb7b028c873b7e14365c5162ac3bca710be8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=f3509e2d732183d0a9510b81e21bd5f3246eb7b9b9c4b08139520f66b3d3dee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=d34589d9ae0b39c45c0f7a88ede33b6c045666d0810a01be4d29f1af3031394c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=454fb16049ba0ae71fa041e068231145ab15a602d57e1fb971a3069d92e1aef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=a172bb0cbc895a38dec0e6f93411c50d073dd88a96f2b3382da9e56d21b48437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=af6874f34c0dd4fa15b8d35f029b996fa7026ad27f02222c1562e68a71ae1f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T32TXBY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDt0EfrUFnrAX00WA5cfEJfguK5wSgkpkGtqNhphZP6xwIgEKs9fsBBV0QwT8Eg5Jxy%2BDId6oPWttcpj8PSFVcF92Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBc%2FvSUPa06RO1a5bircAzJwCsfbh%2FZ0Up8N4A%2FHVJJBd2r3VQ6a8wSCGmGWw3lGzC3zDIIrCaycxD7NwWpXdNedykVdSSsAe3YWlzPBUKLwck8fP8lYZaA8h%2Fn1bJ06Cmk8wz7CqrxTuq6wwLdukzWbkVGQbOJousAlkTSLuTu1J5wDM1rgUcFOCoOzSZF7meEwcCI%2Bg4UYhB4U%2Fqs9OCXfek%2FA4DJqHJ2y8SpTQHP4buqO6eyQQvamxcNEOPgplJymsCChdNEh3MhA5BS3dXExDoUJ1dpFiSzVuDAPUg%2BV6oAYDe9ySeaKNV9XmkR5eCgg%2FD%2BtYTDfDPF6iLhbK%2FOMXyU%2FLO07J7bucqETH4tl%2FQ2BWKR7P6P7f7SR5brC3T60m9yCRY3lvISjk8ME76mgPEsObsBjpiruK%2FxGpSbT7xzXCUTJfshfoSHdybcoV7IsnUkJ%2F%2FZ5D1ry6g0PLUDErbvnzCxNFMYhstSRswcTk0yoZO8tUXYnY8iOJZfEUwklsRiORGKUB4k9uJIL27u%2BG%2Bf%2BIeqkIXVuC9a87u2KdwPtofQqGomVdXETXiEMrFNAcBCeuHJ7MK2Wu5OygU3slRMNbs5NYQBsF5KuxA2ZAHYbdfL0CXDvkpCLNmDLNsXBGvK%2BCUvPBI1oMM%2BMnsMGOqUBXE1it%2FrO9WqNfS84vOZD1Op%2ForgT7%2FSHMhh5gBLB2LA%2BneO4uaQ%2F8iMAG1glWeH7IN%2BldCF0zdf8gUZyF9nYqQIABzCrUFiHHLYWnk4oh%2FPgptU25bOhhochDe0CLhU8lNWKRSACx6H5g%2ByN0tacBPBvHtZAjuJQh4jQXQXXpfzNSrOlh1yCzYJKt8bZ26izuQyjtyYDnXhKS7J4EAYQXsTBuvvS&X-Amz-Signature=92262312b211b44317e80ed2769638ae8c5e9698b156fc97f45768bcd1a4da2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
