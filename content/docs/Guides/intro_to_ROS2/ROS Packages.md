---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=9f5ffe00885bb9cdcdc2639f09551d0da8e287d6d4b2100c6a2a6891d447cc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=8b63569a9be06bf9a17da731c3b4b1f45b82e26c055a96bc4a0789a4e227f035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=d5a4b02d09e4898e1db5993d4208142780f2f29a3bea8893eb7fd7293b2a2bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=51ce95a4cba0429aec42a762a76f62007cd84bfa617d4016065dde2bb968fa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=8abb4a18664273ba96d3bc27a03ae0d075302d73ac10c4886722e2d4ccfa6216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=4cd66a98230e2095e901f1d3e323cbaf40d59957bf744c8ce48b03e5fd3d1109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MQSMYM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FfTNhSzd8LAvLGky8w3uEM3ylxHIpxAlAYC2qsOq9pAiEA%2BveYcEFofXT0nHeptw5iJlcRhw0PX8oluLVGp2P6cIwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJRTu37OzOoJGSH2DCrcA78UvJ%2B%2Brx%2FAiWPv45d66f0ICK4QKtORWn%2BcZcf23aYij0yrFh72gUbP67L9Tyw6E9Qwt3mJ%2FFPFrHxo80%2Fw8ZwOLccjCinmcNvSGtF5TtJNBBTkEhv8RO57IQzeZczNJoN4ppQHsapXcsIIjZZU88Pj%2BrYjVb6gRpfLP9W5JIP6TwZK4qDJxkuxME8tpe%2Fsxdc1koGlzySbcUPuYwM5qpf6F%2Fx6b8Y1SWbXB1X9eUi3FYiR6UEO0uUtVBrIw1NpKBIK6DS9XrgOTHJ6ttW6ca%2Fh5HXiP55NC%2BopZjeoIF1%2FBITS4i%2BzSjaH5Sj7xNjoR8mMLQnXPziDxWgYc%2BNBIdDTQhHOhoUgFNP4pen4ZKcweIPAY9Ws2MZkXDwNYpGsx3PfS1psyf7AMYoFzn0bgy0Fyw3%2FC68jweZy%2ByCpUuBnRxWOCPbuhUQJmD8fxvnIfn3IJn424n9YLHgnsUL%2FC2XrfWyesQv7N9dfsCmmxWE9IOCnX4O0TvwyGTeH0T9HRs%2Fq8A1EXYlqR3BaeFTJRgx3EcMHFPPJnQ8aSvO2EfgGZPmtavh7Z4eLV1mVmmhzB7Bblyb%2FYUso6YOQK2diIie5asc2mr%2Fvu0Sft%2B80oQYVWhpdCxXB9tBCMoneMM7Pt8oGOqUBjQQMw55bf2bzgufpbnKtr35iUYaqGkGEVWipockFppqmFD%2FKkWnUbMwetjR6DxxFyslvVH1I5Xs%2Fwio7b4N32psX4U5Op8A42IA6hvbkv0Ug2Hp7l0Dc4jlNYzVWUsGN5mfquQ9GLbInOqKMwC4vGsrODyjyYRPr4SebU1uvzWyLy9WenCeMzU8RUz1wl3c4%2BrJj26fLXiVO1%2FQxUIBcA02vHD9l&X-Amz-Signature=64bfba5bec6f7c9388b79d770fe9c7c2dc980810dab87e89ab9c896d38a9d562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
