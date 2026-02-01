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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=ea2aeab2decf72c6253711cf3b74e9c40bbe8b9c132e0f2b18a44e27367c9c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=8b1ede5205dcdf282a9ca5b34550a4cfad99f3db8577d0046a34af5a9470bf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=8e12d8e6ce81cbb613cae0a8e2d4df527cf70e69f523aaa6bcc84d66bd846152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=1a96324c2970c566c7ae4a1dead1c8fbd96bab958aa86b892db00b666826319d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=0c8b8f91ab0461e656b85f1e84b5f400b1c06447eaa8e518396ba150c77bbd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=68f3dee22d5634b906162a2d59a66664f741867f0d6457e7b0a7b9c6fd8d1a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6CAN3A%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4jAdm6Bjtr1KsueeJ87qTUuDPptgPA%2BKnUar3izKKAiEAiN0vXa%2FJVIb3VY02mha%2B9KOOeP5kMWXyr71bjBYwFu8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlpSDkVAeMwIelYYSrcA6mAlBuVpzNj4efaXss%2BhxmGpgUmt5ajLYloYG9TnFnFbAB5858lAKtQPBVLddAX3RqfhQDyEoreB0hFhVxrUJZWDMkJzf1NSs7hbOLsOlPmN3GOnX8prV7FHU3zs48O%2FlY8n7x8QbcDV9Lae5YYC5LEDm3ZWyIkczscEVVvW%2F4o6mr5MqjUI7Bl726b55X5tXJuCVkQ8%2FusfOYJoRJ%2FGD4ou4f1XoheXKGBkJJwbGx3R0gzrbYUtKpJFB3zxUHdh6tzjku5ueaoImpJHfxxQ93Tql6vUuwH%2FvtmVuhJKelJrwzY1CjyNrdOksJs9JvkyT4a7w8CLv30PfDoma40NAXqaLQtUePLbm49hkhcxU0j8offY4okdB0TLbJ2rD4IIyxlY24ljbtGTGAcRTVACfYxKkle3cNibWLw6yBqfOsQDKIvqApv1b20Fr%2FAkrLyaybsD9GJJk%2F4gqdCHmICDoKTPLQpgrukYQ2LooRzr%2BOQ7DV47ClejZiukpDRZRb0e94GN%2Bv0Uaq69MsLLc%2Boe7eGipVtCLELjBc2igtK0rDBH964WSy27I6lVVWMclyqp0A0VhlJbm8yOhUWTMEhx1LLxXUk67wtI5n%2B%2BYBj2lHouuPyfB1gCtayo%2BlTMPfx%2BcsGOqUBTfJ60Kf1Qk2JeWvvz26rhMk0P71x%2B552nnxUjv2NQgVmZN0JKbBkbPzF7nvxfZ2ci5ZB8X4bjCLA3yYzXDEcu490vWYiCZDwqgNdV%2Fauhixjx%2FilIMbjZkznnzd0PrKsiMV03ncQhmwqoDKR8ip5GXw9labPk1VSJvifG%2FTe3kGnC7FQsqJRkUx3b017uA%2FChbstH6qLaVv9QCYTeVmpiCOtVLqv&X-Amz-Signature=f76a631958456c17f8e2faed455dd0d99fe95e397981873e62d3bc8301da32af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
