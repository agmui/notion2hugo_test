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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=cce48c7d9f5f4e71fabb2928c5031c5649d97f74cc58b67acf4e19087dda800f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=b1aeee7e1a73cb26d7d4ec50b742a1651a6664fb98282a370eb9261be35f9e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=01a9853ce08e3333f18c32150c155008bf6e480c0418db83e8aa48f5c3da806c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=e8e734392bfacb1694c766896691f6814e1ad735e2808088d9f2d9ba9eba2d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=b801a0b018e5c1e9d4b32a233819fc21e88a96a6a7d6c8f600cef7c7e704d956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=b925b54ff96b4326178b8588beb6c7e2fbfdbee72c38ed5d8919e267252928e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCV44NJI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAiScP85GQrI%2FAEFACcjA7HzxE%2FlWk6cjAMUMMrBdLWIAiAUK6yQgEA5IpxhE62ryHNSshEPEX2lF3mvqhm6bATYmSr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMS6CchPvV3rGftc5SKtwDfIUtrbmt%2FUzT%2FCn0%2FsiE3aZcMpwxiK2f9BNdJFYiV6vJObYoqmWfvMPvW2z4haD2cNsPGtffyFfTSQs2oHZdLLKAryaOyJU1PGEbp7MRE9Izm18L2GGRZb8Kug5XQGy94gwPvRKuihwvTHNG4isOBZcYpbVhgcFJCcQ17s%2BjBEkgDC8XRHtHtBL7tua%2FDy7K%2Bb0%2Fo4B%2FmT4jIkMIBNkdH0ejMzrsq0OO9gBi4Z5k1tDBMPtJrCUJGI4VSxvqnpaIr8QrgMTqTsaRrfpZiBawxBxxBp6n6uo6H4HzyBliNVFWONw%2FqqGdb8V7bctkDH5X3vxv0RUAgeQQJX4dsqbKiv1B8tNpF698eJTCQoeOgDRrJLlyX9ifzOebB4d%2BYVkyu8VfjvbT8B8kJoZvFRdvz0RZQvG0rZO%2BEXZDpL1Y3beKh0i0ZVjvkPvpViw8GHxnrPVNsSlwbiLmFP6HbfxAZo%2ByYxJqp6kbFEWFKneUH7fwPuStZzMOLUIJLOJvwkTxcPAIlwgqczHxafY2YVSwyA4GXDoKp9Wb7rhSbRp8QcTqdr9NAr6Wc%2ByN1OVcNzdp3YkJ2YM6CZk5vwnHEAPRq2E416IBgbttoPh%2BhUg4APWjPNvu%2B%2BlegHEKclowu7uc0gY6pgEFm6aiibbyFZYtaUUxSZi4HG9l9Z%2Fzoy%2Fiw%2F437dajXNA8qQoUBKY2jd1zYd3rn4LyrPw1YAnv7pWApvUoFcPOITPvFROeBfcJX5Cfjz7oNodZVQ9ANIqemd4GG3R2vjz130WyhxHI9APIeG7uXgS2%2F6HlIU3tqzt0un4cK7fodulONgZGRNFSDRkNbLhf8ZkVoXfIkMY4JqA2ZWTA7iirfl571tlj&X-Amz-Signature=24ff12cbb79c44a3138d70c27d5f06d96d5241b019ac2c79bcd5483e039d2067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
