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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=6dde5bab52676a4862117348882afadf98b7a767b3514095459c527531de02c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=e57aafc4c140e9edb9a35d36a52cccc90c75abde97411d167e28b34ac68195ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=0766043fa8087ed6a8dadc359a477dbecd97f8d6e59b10e4a21e95472aea7c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=611a0bf9b5682e5b6624f26f284527b433ff1e505fdf0e6c7a9f1be5ecb540c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=983529b4c0a34bf885aaba7fd8ac5868cc14b4b519b2e8a6b079102bbaf36071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=0222304f99523e8c4d7c2263052a9f00855c0d6196cff94229e3e88bc2e5a39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHAN3AG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMepQu7R%2FUkA0VxcUH5Wr7CDtOeEVZioSMNN1%2FLpCkAiAguVlrvOGfqw5fchxAD%2FXQi836P70JDjeokaIHgG0RoiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l7h5ZMm9r1qgy5hKtwD01GAk5HhSBnCEfzDmLJ%2Fw3%2BLpE%2B2mpzaL11NU0sviuBLkjSmPKpz3JRf8Sw9N9V9D4xAnlcFJoD9NAR2p65GDSQ7Dg1BpbF0xJmrNSjjBvWKkwgPwxWLXaqBdO62YEmFOW0klQ%2FW2fjeBXwxAKaGKJrkvIsycL5rmlX4bjJzjnkF2h9Y%2FCEYLIKspJQAuEZkAxNFWyj37m66%2Fj60euXGS1j0rR%2BFrGl8HnvI7VZWulLviVr0Dn89cBdf9PLLnYAeFY6nlPdaFKQNrmImpQywp8l0pr1N5lSOuoFZh8PK26D4oUQNSZxys038YHtQou48ZAlNsKdwzfGw8d%2BwHPuos1Jw%2FVtGhMnKNm3vQryYIqfNUugkIGELuclqgsLdFL4y%2FVDmKxeW29zmiGYVLUeWnukmkESd%2Fco%2FlP4LoflVLaUSJX%2BmF4U%2BD4H5Ic%2F%2FkyIy4wR1yUq%2BUXSWIT8gE7OtmCHgnaeFjX1Th0WNranaOQDWl02DcIQV7wGnWGfHLM%2BUNuuqXnjwnpJgB6zfDZpso6QLm0FWM2Lpz1gIhJGCEe5zQSU2gpc33EjV6vovNmLVi5tAePr78Ji2YDYPdrfrHlEb3gG8XfIQPycrs02gvDnV5dc1GrECWIm6zpgwq6rEwwY6pgE6koFTpzOpOfmATQO2u8hcPPTaqS2qcPxYPm1vSD1yA7Z8IN3vwE1C%2BDYh0%2F2KbHApAjazRLOS3v%2FM5CC%2Blb5CXRuwtEqvfhZwSYxGrp0pgwW%2BqaGIbyC9FdrhAacc9zv%2FQJBzkb4%2FpGXk9G7p1%2FL%2Fbm22sQSdQ%2F4V%2BmTShgI5lRmo%2FOz33q9rqaC95cGK1Z5j0nKNfBBB8D%2B6pehP7TIAlXX%2F%2FoCW&X-Amz-Signature=f807a87c00972796a59ce166e07ddee4784a6a0d02b023ed336aeabf7ec2fc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
