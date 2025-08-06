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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=0d8ba80324cb9d9883bf8afe24a873bf087f8c28ec3381be0f25828f9c64a2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=a8af0a938cd2683ed67f4194a836a6e896e652df86849aff78e980e0685aedee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=39f736d875fb6d4e5b4bbcb77a7b376f420dc4586f60f72e84005755bf695402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=dcfc71c1a00b063bd3a208f83f60b58ac9f2e96e94e1ae72d47201e190e0b465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=c6ab617e8ed472b2eb3c877b3567c5f0ea877c4fd02f038085fd5f33268eca7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=a50054ffbc624564124b32f4daeaf49480289af51894dc3b33acc7a6688117cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5CYA5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDkX7MvDJKOIrgl9wCuf8dswZ9TzqPlim4LYYgl48CHZAIhANYSEIw5SHrb6DLJ3p4YDn2OkVdwr%2FC5cZCGQz%2BeNxZpKv8DCHYQABoMNjM3NDIzMTgzODA1IgycUBARRBEI%2FsgR5KUq3ANqIX36GNh%2FRdVDSlIY3QCOY%2FLxM%2BmMYWAmyW3xAXVdQJwK4gsnO7kc1yV2zEOYKmMy4o56mHxmLUe5XmwpDTCSobFnDLeF8vTAE3ZGCh%2F0GM3LLyVfxY%2FY1fHT6rDiQbBIxJuKtsBgQEntKFXDZWUBMUOpK94Rm4A0LNIZsCO2jmC7em2YGANzSpEmirMuKonUU6MJZ0dagxs%2BQl69UhShdkY0YBRIV7Grxl2xm3wKaCkz7hH8HBJoZ1BW0Neq26HBZq2FG6G9at1X%2BZNQBH3K8QP%2FlooRksr5jzCrTc7Au0AuC3%2FLIjqsM%2BW1GRjE1Ogjyn1KNOkp8q5jpovSvCKEzk0jrfzVGZbGeD14yrUR6boZB12ahB5yZB0TaKDOCnKpvJ40OWnWwfAvC2tJOM%2Bh9gHK5l8QWvHSYX4%2FonFfUVCGqPTsM0bZ7Giv4gv4oBzYjwf2GXvvGM1pZkA%2Bp9I1UfeNDRhMkT8tsrykuXFBHRBXDPLWgJdwaTrz4nVulH0%2B9lhA9bDa%2BWHgvylO1jXW8W%2FzmVGdYciLFf1InUCAUY6ywjY6N%2BsVTwSD1LQUG1nWxZyBS31ewD2M8jne%2FQSAv1gnyimTRGOiIEBCp%2FozRrrsUarhvA5TROzEYjDYrc3EBjqkAUq54A3%2BCRErBb5NK7Y%2BEkip2Yu2XZzGzb23V2MAK3sMesCRFYcW2NSn2Imb7S9gAwt7jt0moPxEzc%2FRgnJ%2BsvXEfUBbzAfdhq5ZV7UTYA5P%2B1dTTpoViNkrV23JUIJnFJyVH3KozGONSytVzvjlbv3P8%2BPEOyXaW8Ej01HgtkY3UJtew%2F7H%2Flal%2F42pt3GbAblfnIy9iB53Hpf6l2d5nRTqxxWU&X-Amz-Signature=989c1a9bf3cbff589087d066322a7218fbc4775ec36f423145487e9dca881716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
