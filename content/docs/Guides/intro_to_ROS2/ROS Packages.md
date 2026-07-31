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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=971460be8f07045338cff8f7eec9853555600dc32a22f0bec76ff03042c5b1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=c3fe8d9ede0c23a0f7044341c6ff843a33aee19b525857eadfbb69e7a4958612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=b38766afd734ce8c7067023ebb6441781242f1159cb663e1af56eb5c649f9ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=f48fc5fb596bf786493222ed67ae311efc9cc69a54f7e8d62b98fa66259bdd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=50f0ae6fc2a7e1720f6a80350a36c896c2be7d90836c38206b90e181aade8996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=057010e9c50da3765d77151a4c3c224883fa2c23744d0f460e620233f180ca3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5DDAVN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGs7sqU8PohdZapCEaneeAIvJh%2BRSaTpgjrxw5F4MtwwAiAwR63DFhkO4mdVPDda9lhvhWCPv%2BcP4DvBPrEd5s0fqiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgRQKyF3yecOSqfw1KtwDeZCip6CPxA8QB2aXEj6VVFU1olHbIB462yEhiL4TsZic8u3KuhhQFYVgVpWW9oxbPDZP5iAsFAD6ipe6FkHRc3FWBEutvIWTWyB5mKefAzql9%2Fu3av5dAVNYoTYUXydj8DxBPIrBFfLETJBRt%2Bl1nU9rMtN3HSljuzRf1SDLh3DrkKeVhFslbN2ouPWLk7CHTgyjg%2FtgSLir2qXNKxWPzGi6KrQ9xfJ9YQmiMJ6Ba8uNrccYGUcPEQGbz4m9%2BYqg9kQbtfGeq1BdGIhLaY%2B3J9xqrPv5Wt8pGLcCihrcbNzGewoIvsC1BGs49Ga5vzJocweiEBv1K6WtUSoZ%2BUfceLl4Pwq981TJx8d81Or6TsmsCBgeEBH19kPcPDJwx9uX6Hlq3pUtgxkHWeiE%2BWXfKBqcHa2Qycz9ursN9gIIRwdwh0U9wiYJh%2BVCOm32nAog2oD5mSBY79I22bccQfLSaIOAjRsNFTzJU8Uuc%2BE5wHj8m0DccOT11NgUQYU3xaB6qWnWHp5ss7NBSQKMP9VQtym7Kd8bTLxgna%2FBScuBrvW6dYxQvznF%2F0mWnS2TqSZDUk%2F491ZoxU8ZyOkRdWKUdr3AvewEqOoSDaVmhrH%2Fq%2B2qThVhEIeeCe4SnSYwuZew0wY6pgEJSz9WWAePSOMCO2IG6zYxkKQMK4CCBYOKo7QGmn7KLWmYszWiZx0FftzTSUzI4J9aSHjVLaGwYgJ7PfCVrxh5nfdxEqJqcaTmHjmY0LJxi0zJeC1VY1rOH3cNWAr8o3ZIsg%2BE%2FCjvkCuukU2LLUoUYsW4H86X1mHfbLgy3aN3uuC%2FIkTQs6PFivl47AabeHZpS0nCA51%2BfxKItSzagmLlDKJtWCaM&X-Amz-Signature=cdb96296ea16a74fd70a4a6d63328f3a50e44c97df74da12855c263816b69844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
