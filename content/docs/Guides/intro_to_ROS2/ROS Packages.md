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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=ed76818291babeb6dd3a260ebb16afb9a030340f4b6c83a6fafbade799ba851f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=a2368d98858282c78c3c6e08aa49e9b79108099e90b0cd56c975ca9b16309327&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=acdd05d459b520902780361a9b457f008c0d87f60ea8a298a3966ecefcbb82a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=38ed71945edca6d593b27a23f2835fd49c5d3edbffbc442a8f48e86685648670&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=550204c22b4d6b6f2bac5742f3bc5623591b872df039acebb558487e01b23277&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=5db9113d801b03e79aefd9e16d9188e46131b8f65970deafcaa9a746019b24cb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYFQNEU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F%2B%2FY3j5OhXEROByoCRrn01ALEuhM7RU5Z0%2FHmuJeFcAiA%2FobUjNL6rCNseZ7rdYFEWunxdT61cuMrdm1%2FXOW4JkCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8BkUGt8XQCqaSM5DKtwDbY%2BUVv%2FGei9FUO7fElteAeUg0JBHCnLk%2FrdA2Ej3b9acArYqmaApTP5YJmVZcVrmRc2W5luT5ME1ESG0CktzhG%2BnRf8af860Ao9EfimXTWqz5YK4M6F6ebcSub6HXSbmOWip70BavhecoBCdwgGkaanUCvJkw6IcavteCJh2gYJ4jlygBkcGgYoa3LjEB3KQY2GMj2RS4pPptMaZj3x7r%2BLtVWwQwbyFpssTf13aO5ixMSYG7DY61BzD9QogrdorSRK1ZWErarJFuUidmi2kodfMebPBCnAwdo%2BCYoDCWeXIjuA9BmMIV%2Fdn%2FhbrCgecPUnUp%2FIAaB7iIJkD36UU%2BaBEIjFhi%2BJblUB3ul3z%2B%2BASv0rNXlUVW%2FNnZdSg76VXPIsKYrhq%2B1bobLa%2FuJvS0iWZj5M%2FkjJ%2BoXuL9EiFmmNM9nfV%2BEzH40qepFkn3LJd%2F9w%2Fl0DK7K7hZ3vzvJbQhSp7idMr%2FzeC0ot3zIrc6PhoGfWhoZbUVT%2Bjt1EuX5R8x%2Fa35BvzDnPEIYv3y9Cr%2BPr0ATR0JzG6nobd9iLovG6hBmD5p1SizThsDVS5m6DxWLb1k6y%2FVxm87Sw2A4zx8oNZz%2BIQND9DzpyNWh4JfdlBdx%2BKoFy0Mgf3cN0w4%2BODvwY6pgGzOEBBBj8YgezgMipg3D3H3gOKo7%2BQSJurL4ML1905OzuMDNH5Z8TmxRsbBSZFfpeaVtOhqDiB1jpb20JmmRRrs8GOaEcsK5dg6xl0zWDGoMzKVbj4wzJswwTTF642xHbEPorGw2%2F3f%2FoRK%2FKArcq%2Fd%2ByZkKiKVErj2eMiQK15H6m%2FLT4%2FR%2Fbs8XWOmYHJ%2BvjaGJWkz76R6sK7wb%2Faa4UwjUZLIiTx&X-Amz-Signature=eda3f3aa0ca8ea0816042cdc21cc1f0b07b88b67eacd860a44b6b8fb74ada51c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
