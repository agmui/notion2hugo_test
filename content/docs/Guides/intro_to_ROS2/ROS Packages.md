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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=7aa10254893fc52ee1851ebf6690228408e7cfb92f3581896328d1be7787ca4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=c5a502ef0f3e14b766342ec5415a59faac7239fd9625992e70ac0f8b2b28e121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=145a64394af681f819ba83fa3fe86e545cf3f4e295591c7ac21702f7b2222f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=9a827acb75ef2c86b5c135b574fae418bc9e4e488be81ec99bfd8ac5742c4dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=1d0c90e337635d2b984681967258b7071a7d3a5f842d5b8cc490ccdf43d1341b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=ef80f62d77394c33a5c088de269fa5f6e6280be0c26f91e1b80e71916fab5820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3R7XUSB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1duZ6fPk3leHDtnxRQKJCoaN3wWfWoMbUJAyF7VD8LAiB0rTkKQY2h7Iu4Vq5dgsAxem72nxy2tNrGPbFzBMfyQyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKBmRS7hgDoeEhhGKtwDw7YLSY1QYSv7%2BOAYS%2BmwRf%2B09B6AbMFxLjEmSyhQfAs8utLaLkAomuPRQCpgkLjVvwt5EnL5Mf5ZWrdCjb9fVI5haJmz5QrI7Tl4%2FAs%2BD%2BceMgX3soTQhmgmpaQYK%2B0BiVTPtib8OcABsjV6rZQiGu5wiOU6HRGqz0QRskhNYScmYcEkgO%2B3EmbVPdAr%2FMXfvvbTzld5i4w0Hg9KQDgVi3Zr0gz3QTUXopIHw2sQweGXzSgpVrUXZz0S8cJAnQimtPVF5t%2BEmZhXt54V3cikEewIW2r9brPaNNEOjSbcQYoW%2BBwQuTwC12ys12LPh7s9jY8V2DZ7LTHQ0d%2Bu13zxJEBX9dP5sZR7U5yibe%2BuKC%2FiwB%2BYchJi%2Bv8cDfgdvlRR60XuPK7CZaefuBTwfZMpbMvw147Tf5OqKbURM8x7hys3yp4MszcnBNzH9UvwiiTuhx82FGpELcZkcR7yQxN61FlCFrzsXHqyrfds2WW8Mkj581hVBAisulTHqGKnbAFzqnaA9aTUK4lR0rH%2BkCa%2FHsAijXiHFtVdNHP44%2FM4vmXI1ZFjE29Sm%2Fy%2BVoBNJ%2B9OEQTn1g1Brxyw%2B6CbyCio6FRsoh80xQa%2By2qUExLdjVLb37rk7vN%2By%2FuCGdIwwMvIwwY6pgFg%2Ffx2HC0xP9Cz%2B8p3KjdS5yo%2BIxB2gW9RR8IjmZL139D7lQX5sYdRC6FUZr7cXW7VWBzh2CIwlXR4umg9yycdcs0JxA3Wq6qRgkI4Rj0%2BcqKX6nL4lWjmZaaDVE%2F2o1C%2Bk9sEMrGlBpJUbAfnxHiy5AfuzrXq72S5IwCTfS%2Ft%2FAjNt3eLV9uxuWlLfTomSxAfEJbmPaL61KmTAUzcrRgqKD6QQXkW&X-Amz-Signature=7321ffddc246bf4be9252ba6443e055f68abc6f981a9dc98c7771aef1093cb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
