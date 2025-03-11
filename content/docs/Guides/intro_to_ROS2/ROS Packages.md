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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=589eb15fbc84b2e2d63ed2df0ce498af07c6f968ca46839fa4b28c63208e5a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=76d89ae387bb2997dc9eb9dd228791f885ce85d4f8755a5d41585ac19919fa54&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=50b6ca6001debdbad978e3cf324aa561d74fb85b62ac9c8aad2216a733d4b958&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=dd2f0ba37b52f78f6a99bc9d95b21e66f36bf301f321b053d39e832127b465cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=039a7f68ea9c371b87b4e0fb4f981c175b925b2b56b8f9c93420e4e7481b45d3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=00ea4f0f533ebf7a9e5cf02c65cfb6c2cac9fd64af42372df5012d94c86a129e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666PPVSY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICBnsE7GEr865FN0nzr2BdzwQqepfY80M3ERzoHhJnMHAiBrgmE2oIf7l9ycFL8fZG3ys9tScxmmeI7XrTsj4FBwGyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oYzr7ueg6jJP2IhKtwDlyADD1Y88Dwm85ojs4nfDVFeRLk2yVXUWCgl119UG0b8toOHePQlUMTPX1q7uBS7cUARI9qAorWjnJcM2CxZaQlxPMlCYHfpU%2B%2BYOnlI9sOoDtKe65L7r4mi%2Fgb4335B98DZ6bt173a0Z6SePkcLAF9uiRySinvhvvoId2oS334gpcCUUO7NZOCRLAkvihOY%2FHzXbLw0M0%2FsoOHFbzn9SdBHvXeL2d07b%2F5cDpmT8mlSkcTcS3QPr%2B%2F5wDxBpOFeU7Ozm1EXff9bBA4pdEoUxQdzQX7NXco%2FM3o0QVwYJ8w4dDC2L23QOpd%2FR0SUKgzL5EFysv1O3ehm%2BlqhkhnbkUxSwIDdYnbu7ih2gCIRJt9FT24PjoIui82YvjdILMZYa0n6Q6q8Fd2f5wUHqy9GSu%2FduPvtCvR3rQv9SFUASLiMM%2FRXf8TKGvk6U1o9%2F9FSKIu84Tnz%2Farl4IM4NR27%2BlT3HYsFQwtDzfOhXMOIvJwdFxgCn6baUVYotzFEedRIFqLJKittV4aFnCYcvoKZO9lPemVfqcT3n2BbJJ%2B26tHNjhw47yibjQHs9iyhZiv8oJjq9FetXdLNymxc9olxRa%2B3%2B2uVvPOGtm9FctSbZZ%2Fb0ZvSizFjt9NQNjIwiuvAvgY6pgHstPty0sIjboyGo%2FIkw1%2BXqp1MbBUNWQJltiWlg0CkIHU%2F1EYr8GRazdxn9Pliqcp75Pexj4WRanb2y9EtNXyFQOwfcoEXjRr34bPNgL0BKD0KNjzwzLBqGA%2FxTbKX7hUm5nTQaTz1GWCmwDqfW8vT5GYf0BvnTOZYR8%2BzcgSnhYdcDJ8iyndafUXQwNhANqb7x%2Fv9y%2F6zKkiM47O2%2F2IbeTNnuMmS&X-Amz-Signature=3c2a2781b71b760e7c3687560d0f2a42f00ad82be118bfd1dba2970226ced88e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
