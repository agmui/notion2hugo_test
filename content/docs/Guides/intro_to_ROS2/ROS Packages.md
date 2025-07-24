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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=9a2e53da8ba49483c872137857b8798d6c56203173495900b06ce4ad5f2dc19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=32da6762e918e601718e01cf5def835b0d8d770e68e525118f409c588992cbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=a32da2a9175779de9dc9eba1f91a96ac1d74db152ca78ec57189064905ca7e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=795cee4ad8360cf3284a4eee2d11370af5e47aac62e0a91c145b3fd1d6689305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=476bf5a32d9c171f5b8bad1ae9469ce56805015648100e864fe085e67cad19a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=040609772672a677eb438c3e3859e81f1825389dd3a50a03dd1e01da98d96984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OPEC72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICI2vhuXA4IHsM%2FBUxWA9WtqGZ0vAhM%2FVgUOZZreSCWjAiEAuHfHhds0S1pd7%2FAWzdiCWTEoEmumx2sJwCkJj%2B9zsx8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBkFBu7pyTqstdCzWyrcA%2F9MiyeuSkhDZTB0m2qg%2Fd2XRNNaksFqjaC2VnOZNlKI%2Fn5wthbspw3%2BerkThnxUuDi69vDjRia0D1Ha0RrTQeX%2BpjcSRP7ijmluEC%2BlcTcRcxDwI6cpAfCx3fBDB%2BtuVtaOWV1x4M3mPGOsc5Gg6YFx28ajvoXG%2F8ao9knvZ%2F7I8g%2FR8BoLlZrH14fGcRa0st69HndTOTJifoJVVaf9oDzSltUdwTvunYuXICo7y4fCIuksPKXmKSSFm81RKrc9e1CjFaEYV5AXQIDHT1Yyxkk5rRf6MGKI2WFmpLgg9dqMKttxukd4PytH4a%2Fvt3YtCz5DV93xGYQlm3mhtBYF%2BdWt%2FLWGVmRn2pvedVHmiEZoZO%2FUfT3REVIsm8byGysQ8bqeNMqVS8TaOvCxTD%2FloQv%2FFGwDGPRasx1k4ETBNRV1s%2BdB69EcLBve97FQkkiBqtzX1Ll2pZglK2Xk9bT990or1UtLVatSUcgv1QV0k7V8vB5iEI77i4PI7TNyOZLFIk%2FjD1u11w83%2B33IccI60TLTOd5cBOUbpDkckRwDj3QlK%2FhYkSX28ds4kicjjbXLsC9z0jBAGPxXlCPQ2rVvzSVAUjSdrwJRA9vrgN2tEZeZMP3xuWkELWD3un1sMIzUicQGOqUBav%2FemdOzRg9mSpWXVsjl5Yv%2FWqqEIkSTV8yrVoFPaUGcD3p5VFAiZ5uqOExCjagKvwgXM1%2BPeq73%2F2AFE6XITdCNTntwf7JvNj8I33%2BRDehOztyMYt687iNEcKeQ4uEo6Xo6d1pXfyAhYZqomRY7NbLhWz8VO2Lm6CNjWH8Ey0NNFNpXeAh6meSQ0WsK8d1S6oeQMMKtAiu1B0xhAYBycr1H6iSk&X-Amz-Signature=1e6c35bcf99fc0979296b7829c8feab66bfcc415339cd08c389d6bf7bb6903e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
