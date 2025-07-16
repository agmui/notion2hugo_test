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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=9252a93ed8ea2917503b34f952c06a2c3e56ea3b048cfc44a4e89ec61e54090c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=b9dc32a81c78529e8cafa12da52b0fa585d778b097d45e3dd4f4ad0381cf50b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=33a2a19db655341d0f9a33fdbbbea2f3951acdacdd9d572d84884e8180517837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=e420098d1764196c66652ae75bff5b5deefabfda0daa00f11d561399cdc4b0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=abded7425a2152dc273bf0257a0edcc3a0b510e7d9eb7f3a064021bbee52af6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=70fe9e58f7b581c8887417c5a861e725832ceafce85a643618b9f92f487bc695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTA45P7J%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDvU3fL3MNOByW1pdgV8%2Brv3HuAgWhofOWZwFyLorKimAiBFGF4NsjxYWfwE8%2FvNHJ4nCo82hDpmjl2Rb79Iz1wWgSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzB8pE8VA0HK6t2iZKtwDdBUKPMOdchiCS2yeQtgulzskUe6QujI4bHc0tWL6rRvD6%2Be7zDdLSMWjNoDnGFry%2BxEIkNacdxWY6XpJRf72W2SQMqzRz9Jq0%2F4%2FARx1dzn7m0VbKmOB8A1ziLxfmuRryKrWxOQYpo%2FY8D4iWD0BO%2F60FZGYG5bokFPAmlqJhkg2AAWZQ2iHnUCiI%2BTLZWMx%2BgddJzv1dEbsUrrk%2FysfO8bXY0oVHYI17n%2F0ut6Z2NCvSDgk7k3oiE9iRn1CgE3euKpIJaUWnH0i55hwuL%2FgmF%2FPD2KhMaYMv9m%2BQOCWOYRnXS1CV%2FLPJ0vPDA6H%2FDdj92IeaNoHAY%2FTL0nbw7D7Ih6xybJXKRfQNhzg1%2FZ9AgPcRLmG81pVm7orIi3goyn3VpBIMcIH%2FyYicZI0aDkFEbmInjJwDVUtmDFEcp6VccigiNI6sgB4PqiYSpHfatBD0H0beUekchUO89nMZkl%2B8XpLUUlO5iUtADAEyBOfe9uyo%2BSdUQFfrZ2WSY3PU37senCORuJ9BeMDsOesWQtmSYqkSTcHQy6qQINyMtvSIvGMUWFQwk3azP6yuV849Guq8rp89G6EL31smgbd2wQn%2FL4t7E99CVMBI%2FtuUU553MGZxS9SJdKkkjHAPm4w9uDfwwY6pgG3nBVaG9F3uYOLIwvh9mhq%2FY5pUUYQ6Tcj%2BxZTOdk%2BgO5bLHbnEvBkGlJzzz2bZLazNBjWLHiyAkfeLJ2SPmL3RJBFloKW3yX%2BQAvwcNebG%2BbXuqtFrLWnxBQcr1CN3Wy%2Bgs33zzkxv02aFsklpm%2Fxu3YyyHx6xMpg6EobOexXfzQPXjrb7WxFoXqVh7VVYc%2B96PwdDeFV%2B7%2FVZc7YcLtdsFL2m98k&X-Amz-Signature=9f574e428d901aec74fd4419080986e3569359f774fb0193210b6af7f18d28cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
