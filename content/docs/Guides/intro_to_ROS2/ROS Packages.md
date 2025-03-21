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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=5e7d30ee0368a3ac13afd9be496a18e03dc57f172e94e64a011db18bd26b101f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=9f9a10c1383e73920a9010152e8c1bdb7a6830d94abcb2cd9301a3f39bda20b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=bffb01cf07a7fb01d142dfb314bd697776e77156063142b858859b736dda63c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=fe1dd90a9cb3cc9ed262b628370b94b667c92f95b7e1048bc5fc4c3b9aa14ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=c90e3389a16f49e2e129bc01ddadb9b3c4a7e52d77bdad2d825a0c2209081582&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=5eb5d377951d0b8468034144a17c4b4229a1185f9d02dabad3adf253bac208b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTKLNI3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDc2J9jncVraygzNL1PzZjKaYXXexbs8DIR1%2F4%2Fy094yAIhAOyApS1ltuPyvfWC49xeIIhslGSDlekueB8dQDtT4Tt6KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhuU4HeVKZoIQ0xQq3ANWmRiH1a7J5pKHZNjIwWnKXDgZpsYkq8XlDXFaG5ymBGb3Ya%2FqtiyJgzmUdkiZeP8aPxlxnYFm99%2FAEDPwlryVzHZwtsGyIgnsBOXsKNk4UXnC85vM0i%2B0R1sCd78zk8Qu00ow5rAX6b%2FfFK%2F9tjSRQ3LNzgP%2FBQzdbnMTBpEA1ZCxBLICsLTDUpC8dywVLzOZuoEzlOe6w6WHkO3LaCdW6hV12yCP9VaMum2RSn8%2BgEY6r9R1xuGIp1i0z4S4garyyphrjiKWkmTG7ISBNJ6kBRAcWsmZKSK0m6sRAQbIVMEd6yf3A%2Fsg7OVNA7twCp0Ay0YHbCAyp5doMgqKizrXhmJHXkECg1WauEB94eAiZ9bRG%2Fcjmxwb6m2o0yifCj77d0MXy6ezaG4ZYoe8JMtX7F5FK4eZxKoiKmBIyoflppwtgPYS5QbP5wT0DWMAWLRl%2F0qe0GPL0JWXI4TQjge8ClJJYW7MJYhpVvrcldye7JN6fyiMg2VRLOLDbwqfhSe0kx9Mae5oCPFst3V2ZwKaVt4XZgsOXho4V5UkBN1R5laxrOWPznvPoyESIbzW%2BPKUTU8hkFwS5YxkSTQ89oeq%2BsWAk3btnQARk0Nr4US6s6XtOxOF8mynJd3ROjC49vq%2BBjqkAbXx0V3oobdxDD%2BpDDU%2BttXa8Ft1sR2uduPwneTdarr57x2Dtr3SgCkb2S1btyVBUemoULU1yAzppGflBTdIZfnTuEvojBmu8fPvToFsBSWyheF3iNLIcmeS7boXz3z7LFvm7BrDbaFAfT%2BrPZcxzWUf4aESh2J%2BvG82H1SbCWkcO4NuJM0w5r%2BQgqHjZIm0uIp1BJppvAfRuHOrxuLdoR8Q4UJG&X-Amz-Signature=e7f8a736f61b18ec3c1a0adf1e1ccb2c267f93d54b2c4efa9066c994cf35cb85&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
