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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=6cbaf02f7850e80dfe12166197cea277d0cc58424522f6e20d8ac4e85bf1364d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=982d2df87ed146d9d196336632ec7bbb2725bd8c582089c123d06206a60390d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=058aa543934c6330770f9912e079269e5703b8c6abd4a7bc47c9057325c7ae19&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=7bee6d91dee0b826def5dd3d6b6e111fcb6f6bef66ffed393e426e34b161bffe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=83f27f347340979654d1852124384c5bfe3d6478b1a6ede235f4eeacb051666d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=afef3e40afbf47eef52a5112e6eb6ae25a695dd50ea0547e4f98d6c425b39262&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQUPM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDuk5Hl0YPvgG2R6KZ611e54v24xKT3fqDzqyBxulJP4QIhANZ6kBAsRLyIl3maUh2AxNN8ugJiEv8NGSBXN5qiD5B4KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAMK11TIVNbflSulsq3AOab7Z0U2ma4pFLWECfWyI%2B4nMWkebojuL0iRPKXkk0VJxeNAAyUAix1ZyqytpruqxNdvC2x%2Fdw4kWejFca1DFnB74HRCAl6S%2Bo8UJ5UvACuglReKcD4iupgXUOweU23srfd%2FvEkmC4GrogNSLzhU4mfiOvkhz4IN06ZnoFaUbvsjPO4ayV%2FHy6ZdbVstmS4X5Bm%2B83T8POoQnd9NF1vysTsrSeKhX5g4MLntkCcS4jI1thXjGn%2Fq07ABnfaISs2jh3rjRJt%2FrtEkF53%2F6BRG5i8BX8QY52se%2F05CuwNrGm6AiJZzuimJbK54WczNarP%2F1JZf5h5iXyKW602KySR59DBCTPSTUZTVhoI5SLHXpz5BSln%2FKUKUKEChHoXxHU1mqUr%2FMS%2FAp3UtafQesG%2BMQEk5k2RUq6bHeuK5DZBqsLFtFBtuNq6UzlAyUh4kVJ4QEGp2ChovuI5gKsqELhceXJVeOJ5BLvzDRUIS5w0dEklVxOtMM%2FugJQoIYuwBBPRF%2F6%2BZV%2FXM9zuGANxLVGs%2BG4RTS9eUUS1klYTJu6tC723H0GdDyQB84Mx1wG%2BIs3iGrWieUUdCDLH3gY7x%2FqE9CO1o8Lfhmssv%2FyaF%2FubTxG%2F0sDmT%2FjuPzCzbyCAjDgy5TABjqkAe8Ov9pcKlF2swkckGtbkTa5cvDhabHuJmdYs6Cauu0kxQwdJQvGXCc7vPM1gbYBw8niWuibBo50wRwpVnFK33Wncj6%2B6qsnqAfC3cCT%2B%2FYj7bykwbo98YcL%2FNwx3ZthayW%2Fi67Brd%2F7a5v1L7oUZPeDnn503DI%2BX74h1rUo3q8lylhUZOJO7yXOKhzj86l999stxXNIb0eI5nZWLBXc8KZ5b6sZ&X-Amz-Signature=2473ece84d2f0edbc4f2d911609a5595f3a85afbb472a80d5f8dbf4f189bd70a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
