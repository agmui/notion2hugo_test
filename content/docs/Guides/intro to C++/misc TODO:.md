---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBGAAETB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHTYTc2Jmzi%2FyFovi2faCCUj8HcwXsjZbsIMVte3DYwPAiEAi8emRZeyDe6zMz33UoD3BsVB5wGtE3cstp84M1B%2FzrIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeVdY7O6fqqqTHKNCrcA4xqULErc3CvXIBP5ddJz%2BuYjxnQuHHc2hINfJNRyaGudNIXR5lRu4obxxPAZp4iRQYGV44%2Bfze%2Fh6x6Ckb%2Ba0cXMf79xDPLjS2iZ9XEh6yvWBlN1LTUPCg2%2FTvJ12AwgxZSSF6pvQOeRVLTNTwiBH9cIMXRkl99JTTCmHNfNkxudqbfHHUaepAxZtTopEo0xB0Qw2NtCba%2FTNkZvZ2WuvjdyNwIkU433X%2FpVvIX4RvpmwJK1HUrShgLR2jxpH0DbrvVvH5Pr994abNmrmR3Jc1rAIv87x7fGgy5IXkNZspI2rkaIo7c9cOSxorLqbdiLyv2G5Ah2Q2L4T9PRFeHLwleC%2FJwHJFQoJO1IVzMFoCTtdKCt%2FqbvgXqha2Mkn3qmkAcJNsweX1roDWiQVGUWi5UJTkxGoayJq55eXCfWXjOSfJl2umeBs%2BZuzYsYfZZ8FMdNTu7c0sHTJzdalXiOyeB%2Fwd6DKAOfSs0rgZo1dombGeC%2FlJqd20N8RIpwYWYaxZJo3fFCaTtggsMSWMVQu7jJgFW7EZa1ZdpMw0ztr8jaI7vUVJEt2UlQs%2FkTr%2B0vAGKer9OSdd8X0Aoz7leYLN1WmlBTxXwPu9ArChNVdGBuR5O2xJQe9maMW1FMMHE%2BcEGOqUBIBbmPHwl1Dwud%2FdQefkkUTyela6dD9MCJjIVX0AYP1cil5PI8iwEPBfqy%2FKHSL%2Bfl944EEjbTtKEDGWsS8NQWNPS978kyXErXz41In52WfLYnzM5%2BsBLKQXRDX5QLsjuejKoIVJz5itAvgGokBgTnam1OC%2FACpk6l%2FldhDPlcupprMYCNgmfG2lKgcLiMzJ2AzxBI6hK4GwSp8y2%2FKSteVWlQhfZ&X-Amz-Signature=c6e86fe653972a2c84705b888aa8ac02c1b89289ef570910ba7febe5d3f58490&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBGAAETB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHTYTc2Jmzi%2FyFovi2faCCUj8HcwXsjZbsIMVte3DYwPAiEAi8emRZeyDe6zMz33UoD3BsVB5wGtE3cstp84M1B%2FzrIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeVdY7O6fqqqTHKNCrcA4xqULErc3CvXIBP5ddJz%2BuYjxnQuHHc2hINfJNRyaGudNIXR5lRu4obxxPAZp4iRQYGV44%2Bfze%2Fh6x6Ckb%2Ba0cXMf79xDPLjS2iZ9XEh6yvWBlN1LTUPCg2%2FTvJ12AwgxZSSF6pvQOeRVLTNTwiBH9cIMXRkl99JTTCmHNfNkxudqbfHHUaepAxZtTopEo0xB0Qw2NtCba%2FTNkZvZ2WuvjdyNwIkU433X%2FpVvIX4RvpmwJK1HUrShgLR2jxpH0DbrvVvH5Pr994abNmrmR3Jc1rAIv87x7fGgy5IXkNZspI2rkaIo7c9cOSxorLqbdiLyv2G5Ah2Q2L4T9PRFeHLwleC%2FJwHJFQoJO1IVzMFoCTtdKCt%2FqbvgXqha2Mkn3qmkAcJNsweX1roDWiQVGUWi5UJTkxGoayJq55eXCfWXjOSfJl2umeBs%2BZuzYsYfZZ8FMdNTu7c0sHTJzdalXiOyeB%2Fwd6DKAOfSs0rgZo1dombGeC%2FlJqd20N8RIpwYWYaxZJo3fFCaTtggsMSWMVQu7jJgFW7EZa1ZdpMw0ztr8jaI7vUVJEt2UlQs%2FkTr%2B0vAGKer9OSdd8X0Aoz7leYLN1WmlBTxXwPu9ArChNVdGBuR5O2xJQe9maMW1FMMHE%2BcEGOqUBIBbmPHwl1Dwud%2FdQefkkUTyela6dD9MCJjIVX0AYP1cil5PI8iwEPBfqy%2FKHSL%2Bfl944EEjbTtKEDGWsS8NQWNPS978kyXErXz41In52WfLYnzM5%2BsBLKQXRDX5QLsjuejKoIVJz5itAvgGokBgTnam1OC%2FACpk6l%2FldhDPlcupprMYCNgmfG2lKgcLiMzJ2AzxBI6hK4GwSp8y2%2FKSteVWlQhfZ&X-Amz-Signature=9b4dfcb27a2e4ff3e310ac93fa518b579ea1d6ebafff9d70c7eb55b9ad3f0e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
