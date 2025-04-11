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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=c09938f18023ee02cca4fe68abf42f7d0498deb4cb4256242654add281242b19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=d10cb822083c9181d026ee2eea84315ceed2a4f790da44c02f5b6294e80c4982&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=ce6d2abdfb1fe7b78000ddedfee51e004fcc9c3299f49fc959bfb6c4864e431a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=92397dd35b0db7d2dd453ef91fdde78335a69e64ba937cdc1d11e9f34886fb67&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=e9c99e9c52d9370bc388b9a8626f7c1ceaee884ddf9a4bce97ada93bd5518f55&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=3c057250f5d506f61b8d8daed5e170f45bbd0ed2ee8f824488a89b9dec00c1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5FTNK4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIC8rq5UlGxKKDy%2BoDOtzX1zCo9gkchcA3qkR%2Fep3%2BnGoAiBWF4YQJT4jCQHjLiH6vAANHwJe5%2FVXh4Dp7S%2BKD60OdSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzPmVhc%2BS10MMeK5KtwDLwMuMWvH9N4jBgFAzSNSImXjhL8iD%2B1RXEQMXXhqZquvl5%2FA%2BPljGmdyVBVXX7NCKxemvDlpjdLNCuEk%2FcZ04XVrawNW5fuHse6iHvTwt%2BC%2BPIG72m%2BZvmLs2fF%2BmLUS4XAdqMo728mn6lsMXyCuU2j7L4D9WcZMoG0vVApAWHQaSO72%2FoygXo6ntq3lxeYRanMiRpEII1C5p2QlMrIA0kE%2F01DQx8GM8AwjJOQZ7GLOikCBSar75AC67X7ASW4MUAlU9%2Bkqoi5NEMujSQVdXaUhxmt5BWOTUl9zE4wHVEnuoaLYuS8CT26a8RWMaG4BqGMfGuhV%2BJqdM%2FXwSLkHY3h3X1a6Nhy6wgY2CtOKbH2raVY4GYHnqfU9AMRMfTpSjeINWSA%2FTQguL7z7Usd865fr3oELLhT537y5upQOIQxPGHia4TI5wfDBiRnbdREkbYWeBIJFaTjl6ONuENJhfLglDTvkfeahB%2BhJqn8mkIetWbDn3vhmGjZVLfIihnuuuEEjLSHg1ulKkPmraYLL0%2F5nQEwtPelQyCQTIAbOEBG27pjMbAkmY1aKAkbkLkR5KTOUydU8gHC0NwZtN8ovk3R2tgtHBuaYBwi8eQDodYQichI6bjLl7X8o5zMwgpnjvwY6pgHdE3%2BuFS4ReDR5C%2B74sUS9hGnQm%2FvpGerLIKtLKHf9oVsY8Y%2Bc6YVowf0q4OwVk83ehlUuCGgEOwizV91Etrl%2F8JXQ5bfzTwBy4lINVc7aHgdKrdKKTAsUqW6gJbqvLYU2KnXyg1o66gxSVyCjJpC4mUA%2FcRuMldYLoFurBd%2Bppdl5JERNylC2tYlqrw1qv%2BF24z3gnSz4jFCvH0eEMTHkLqKmawBw&X-Amz-Signature=80967149b8b21d357b7c44ce75fa7a2497ffeba3a7cefd805950897369916349&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
