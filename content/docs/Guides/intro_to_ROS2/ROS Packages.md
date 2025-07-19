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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=d5229326efeb8dd664d904275e0941290e5d10c2ad53b6033732c7d5d2a090ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=dc96be7cbf5d2768e091a6ca467e9f1d983450862e02da040563df2f7a1b2550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=a83af456461718953089902ee6e6b747225066d666bb28cf78625ba5d279293f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=c64bb2c4b92898f07b150915ecd8f456c88050faf22d3eee168e8a7ec3a4d4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=2eeb8b9d30f1829cb68da04a04bc58e997f7491f8c6f2bba26b063fe174dafda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=6e8c850d84be0830e867f69e138890008762a41a0bb3bbdbd650250bd21c8dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3GVCHP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpvMGfs8NCnJ%2FvJLtjqH%2FY1gnTZQQIUBTyUDWeQXxQaAiBzssYZ0lPuIv6pvBTkVD3wEX%2BamfYHBT2tF3nFXojoRSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bw6pEQel4tY%2FAmJKtwDHbEt7M5XqqH%2FtLtUanHWd6B1tEPxhvT3zGZaGaiwE%2BH4hJVfC3QNqRzy7YH8ivEZ0fwy%2FqtHM2fE4Kc43HeUIkIE1FCwe3CaFOGsv4qxtDr4I7f6X0OSIJfksPPDDAreD8%2FtrPixTQ5ChHbUr6gkMK2IjYwAUBi6kJ0CO8SachVRgNWA36uuWuzy8S4l2Hy1IXNCdBKu3hxUkft4ed%2FZCroircY8o1JrnIIeYzjX2rndE3N7O70kkXOam42o1rgx2E75qmw9FPBINU9eSMhO6gGnYQVKRbaWBUkErIo8QG7p7hj5KUh7WqWB2W%2Bu2SS3%2BAUtYnq1ZARdilosUpmnFqZR%2F4c7m7Z5IqtPfwfl7CsbPrdIKZJFlUnPjLruOFCzYSOWc3ltSfLHC8x6i%2BprASBolKh8JrMile0oJGAtm4x6wYHDa3ugBIteftvFiqnJG%2Fd2zd6Tvg7PeyHVYXUKh4dzvzeQGmuClpU8IlykejyD0qiWwdHi3OFttYR0zZFTwpDSQJVWXkb6hou0OebGr7qUkL5h0evoqom3PFkLd8F%2F1z%2FxTSewhtsxHldgINef5rozxm2YvVMXLQdNc3smY%2BfF4HzX%2BLGucIqGeyHVhg2tErlCw8iFh060MYswtbjuwwY6pgHBSJO4a1PgKRTPiQcNHLXjB6I7XQ9dkgYWl4Py1PnhBIg3KXxYHsBd9qa5KX9uSV7n5Y5zWqximj8LZIsFz7Obx9waaE9NZOAKQbZcnOnbwVhY6POybWSVo6ta4GWDQftwo2TGj8NvSCm6tH1REnUzzMcnJ9koa8ja1m07Ehvr%2BbFbFONSCvd9%2FsezyLixNuDmu%2FFUlJQJ%2FQxpHBnY7K5QQaqVvzWX&X-Amz-Signature=a26224b030f48ab97dd5d2d3a1b227167cc1e2c45fa4c405d4e95a47ec360f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
