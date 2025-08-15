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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=eb90881972fbada875b56d9eecda992f6515fe9c3a03ee71422964cecea5aeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=336a9ba57f46f3fe7a371844ffa6b8cce67b971d18aa9368bcecf20074163cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=9292132ad164bf7a3408ff1e821e9d299c9525d80011daec9aeb7fed4d25d904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=bcd40122ef62d0a60d91ad5b17ad36eb2c4a80835909357c572b7cd0bdc37427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=9ee12d6b34ec9addfce8130b9c196abf4f0b19b20d5e84c7d73207abfa51c301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=d4189e527514e11db7b6670b64d97055062323866a99df85d88bdf5dd4c17e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAP2NCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLjZz8wcCDihvYgHL1wNYwtrhCDK2FEr1Tn9vtNhJDUAIhAL%2Fi6wznggVtrzGzAo1ARaAMSY9UcTytY42HdF9HSTKWKv8DCGMQABoMNjM3NDIzMTgzODA1IgwW0EaakSybN2kE0s4q3ANXhWzXCakzucYtSyGGVhfoekbHaeMsYw687NyWI9HnWmeTJ92dSPBUAVwpWylu9r5WqvpbsSXyLCvIJh3kFqKG2i5MhpjJMOHJF4mKO1dyE4lBR3A4xuO0K76kK9acVR90bOmmWrrM5T0LqJoIKLJpYrQoYZdDlJu5BR664fhResDqsAEvnfie8JKaCMcDndvO5l09tdQkwveaop6AAC%2FIXbjmbZF2GGCA1gf%2BXe1qkRuBC1tYs58r5QRQ2aFHL1ScGjRp3v8rRAGWD3ZrPHvBAkarZSUoqyfdiGOL2Cw7rMXG0H3baQp93LoPHFYAygwr9XFzNQTBi5r9ywB5lc%2BiktL88lRS3ktCXDE7pwJhhTceLc66uJas3PUZjH%2BQnIl1jqThNiLnK9xYkkRJIhdKV6mq%2F4Tu8WEQUsGQED8lou%2F8KQAM%2BCMTkCkUR%2BBhrFeFdhihTkXSuoECbzQIrkoswPlRS6B5XXQ18TqDXqDxmbjFOEWSZrOIwxkTV9IecSclrXUbZhrTzNtIRc8w21J2ChNy02vZpet5mLqJz2L8lcxIsSpECGiuheHbCHHcL%2BZb3z0cqiuqYh46n2UGsTc%2FusL9x%2F0lCZO3PayyKgp3qXpkw5c%2Bi1MKoCRPPjCm2%2F3EBjqkAZo%2F1zKsz7fJsRleoc1o6xYMjpE%2FCn7C9q6YzIwMgoEs3r2xioV28NjHVeEeXLJnLHC5DinmUtppwzKRrs3%2FR2913UcBX%2B7fA2sNjOVQ6T5F78KgyH5ornpVOcmtP1Bt8hhRqqYbg7gED7nwalo26HjCycyHGZv0NqAuxYHFPpTYCnDeoU%2F3UmNLnely34JheWrAbe4tSaACeXS%2FcQDNTmbhELxV&X-Amz-Signature=6229f93977e12053753b6a7f89935d5b97b7bcec1f8e3a909dc88a45765aad51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
