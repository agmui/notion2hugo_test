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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=4cc64295225a17437750f880270cea98e3a27dfef552075b0ecdebd2bcf40966&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=0e8f38be51618244f7387f473c9776ea0204bfa9d2a35efa1ba8ed1416134d63&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=b5c590afe5be9cdff8baf3150e1ccf65f43495bc6cdf830e353de3798f34e442&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=2bb98798ff1a4a269aae8871c91526ff0a4c37a4053c8485cc2013c6da4c37c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=97a7a42d17938acce7e5780d211d80604879acc4332841f02e43059e313855a7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=d8ec00328fd9c1aaac9599d7b4349add617e27e7498c2e3ba51ce84e439eeea2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLLSIVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGu2N%2BnCceNmsCeSGH905FuTCKKaiJpO40yqSxdKXNDMAiA5IgY4XeOW71nXBUJMV8fFtREekyS6jHCAVeVc8AurIyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmPC8O4r%2BIcE1aJKtwDfFDLMJMqYcYRMAtmZglh27JE5X4FM9coLMkqlxqyg1IiCFaqsMAR%2BN3r6dRj48zXVqMwYOTQz3%2BgwqskagdZtUlNaC2RYaR7ysrQ5XNIdT%2BB%2FZDo4aZh8IyYQ6kZzABryRpQIrU%2Fy88sMbqqYIT4QIfs4zijzyU2F538YR5FC7XD1XbuS0J6zom8OPD0tnUSpqvZORkcT00F8LQwHV%2BH2XGsOsFK4MZyTAgVyJNbN9viQtTPfYw3eG%2FiNNVd1CDLgsyqS2PO1loQfMh1jDn5FBBK%2BUVx0Q1YpghMbSmjqazyBJ7XJNXKyPIoe%2B1g%2FjLqGI6ZV%2BB9Wj5BFChgpexOgyUKhWVmjIyJfSIzdg%2FawM44WUdCO0AmiAiUOmHszfngqzWYx0VOB65F%2F%2BkmWIC8xC4RFvS%2FlyDs2MR8Ixt%2BK%2BLYN3SkzKEK0aBVPzqyBSPgUtVfxkSKgaehQoEQ1IVGrWxFryYumtriVk8%2F4clhvGoftANzqovc%2FK9LLFAoFrFe8jCEQ1UaH%2BZScIeO%2FrSHG7HsYh%2FWsxYJ2tMP99BVcZyiz37XWtKhNHCPjXnb4IQ2TBIRgyBnXX9W0Qz24CJtAZ6t6jVoLTYAP57gyoxD%2FbINO8a4hWaz4EDG22kwrqWtvwY6pgG2V3YGOnwWmiKNK5ybNJVXbmf%2B8YnMtdWH%2B%2FA19Z8tnLxTjC30qnz3Fx9g6DVBF%2FnGbTCpsyhwi1ud3aMXwnut0UYHfSbJEXfz0xpchpsFo7la7CaDNCXf%2BneGQtRYs8w43o6dUrw41HqJwBtlhwKoZV%2FBiw%2Fnb5i3gmbhZ75qzEBzTtLv8MImEIVF3QfRRe8vuDNb7te4wuYr5YnFmHnxi5tUGDfY&X-Amz-Signature=7424d14ff6d96c4c50d0f8146a4f6183cdcf50c63de5f745fc4503a60289b247&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
