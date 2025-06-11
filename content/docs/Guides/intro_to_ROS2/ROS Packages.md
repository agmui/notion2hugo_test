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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=538847672f1e710bdb04744ba3768b16989e6ddac12464999888a041b1f17a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=44d5aad03ffcc19e1024def679356a1efc36bc8f083b6c96ccee8b9990da95fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=4a31cfecd39385245dcc6794735c21a2168f4a6df346e1707eb02241b124e2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=e4cd103c48479c2a87feb5ae657bd40530fb411bcfb97c4daf8c0ebf35b1abfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=151e0c3ddc519efa79ab8b484094bfde676afea564a0931c5a032b51b0cda632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=04b18d3c4f6598ce939f33917673e3e499d4ceab615dd47955dbe8ccfc66ec99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7IRVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDqfx36K8DxAacnsUHNWwfOnkpaPjXtyC9gCypq9hxyfwIgMafhxDymG7eQ6aN0ddvNLlgLiMhAeFQ1zg8Vw2O%2FYQEqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6oBbvn1rbEEZUj%2FSrcA3%2Fk8bccl3tYmc0vLGI0KDpH%2BX48vXHSMMSxxyo1Vbe6EPTRgeNNJxqJiKvSc6gnWQHOBLQwCKg4ouWl4dj8%2BDkc0fO0T4cnRc3DpiEboQcCWbR8ElB8wy6BtjdVY1SQxuTr%2F6z5tcpqmJRy7VKCD270V4RIn59Hg08gLuq4xSso%2BXlRW0SnN7gWEHzqrWdGCasqW%2BUXHT818Tsx7TFnhJA01THpDEk0RKVnv9j42WvQb0mZuvUe3LXrmRR42GH9QWvkeCI4Wn4ikwnX9k9aMJ1lXoiM6%2BoYNWFygGpplB0E3WU9BzKr8ZAGVAGC79usGK1y%2FBldycOGiO%2BOa515yhoxO5wh%2BUC1RiKc5KFMw6D3f70IeRvbrvbjHqnp%2FYLRqUjLuFRuzu%2F49ijDb8WJ7ZqPdYLeH848cv5W15jgwnPzAmJ3dQYlRBrM1PVXcdtZhoCtN%2ByiT95s1S78%2B%2FFHgO96H5C%2BRiKgPvZn00rT0331Ir9shtIadzYCFefAXN7D0goc9kg9XejhuFVkoiaLKSLcKUc7%2F2T%2Fc0mf18n%2FGCYOC5l8igA8ciS2bQ%2BkV2um0uXP4VGp3JEiqoBd4e6bCnS7q%2FF532Ruq%2B1FNafsid8nPfn6M1HyWRxbB8VbMIaap8IGOqUBUSMIb4AWPKw2bGuqcd0Ss4ZqUBR8PQut5mj38GxE%2FN%2Fb7bABUY3Fpd2EsxHNaQgR9EcYpW9iHUuNZdHD%2BzOcuAlCP2MYYaEbczhD%2FWBueFlK5LXn0THdQLWHpyN8UpundsC3XdYcLdVn3E7pLvVi5GIU5ZZ3CRugaMdN8PpIeAAKp3HFEFEyFAd4Z6omk6IY0nJqbl8sofeoIplE1jCTAoNlGbUz&X-Amz-Signature=f0d1607738a9ae576f866b3b90da5db4c60b261820370cdef973b817a0ee726c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
