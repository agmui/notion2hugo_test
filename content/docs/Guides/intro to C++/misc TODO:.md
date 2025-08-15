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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQABEM7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvPSGVAUJ8k5dpqDMgph%2BFz%2Bat791Sfllxk4JJ8AOt3gIhAK1T6HLDZpR2WTkwNYngPf5rXIgExjbf0dS5K0iE1BSpKv8DCFMQABoMNjM3NDIzMTgzODA1IgxoMCfwSP0JbFyfiUIq3AOR7zTuIAwCtInBtnchQ5YUEPtbV05Z71SjuKYK0A9%2F7cHbQHPg%2FbsIIPkuiHUteAzfsmA%2Fg8qbMpHxIOMzo3bUqbg7qtAV2aVtd49EbDH54TCYvpnzEr%2FRc%2FVGm5%2FP3IXp9RFQODR2gVhdLBlC1ZdmOfJox0aaF7UVVLon8hufMBVStfQKMvNt%2B%2Fd%2BY2k%2B3HYOBSuJjQqVtD8SZMxKPXP7Ay9YHCuYP13cPDrAIWfmpSs5%2BVScn%2BNNnNw4KRGv2Czxn5Zr%2FDxrT2zIjR%2BkyFT95tP8P%2FqpZ%2FBxPYWEQqX2ZYIy650p12CMmwsio0rBI3Y7kdZOIgzKqtAv8MLmc5rXBesNObr2C0aTykweOthw%2BBCHaDxYG1excL544LvY5ilvqUiANNhZk31DVWsPsNi%2BcEACccXt%2FbKMJIsXlA85L4sivkTKIB06i5AVPq%2B1rSm2ABa1kqkydY5UjERKy%2BLosUVNnACF%2BOBo2S2pJyb5oiI44ySeSyEeX%2FIhGCU7IbKZBdulR8LNy2gcJDnfb14DGJ7bNKfEzz3eFR9KydPS4IaWnaTxGs4YQO6Esa0ht3q%2BWwkSulLFo3ATwMEsGJO3KFDRYsU%2B6%2BixFtwMhJtITHYVE%2BzLBn0WCzzqBTDzo%2FrEBjqkAdPJyQr1rSJmTnoMKqkX%2BDRF5WMRUSibnkpt0OFXmetQM8roO%2BhdTvPUWiVx8BBhdBv524kEfVjtuR1zwx41vD04lIAMbEGgwvzT%2BJEM30NC3RIh30CSAJ%2BZsTVjmcoMUQt791PDIr3p8HlQFNkkRQNlsH7yPZKApXg09MNAPVWkSBixnJX3ekKMly4pD8LvXCwt56rAFTxkER5kfbaYNZFTa3W%2F&X-Amz-Signature=c9611c2cf66662ec2eaab43e29f10cc1cad23012bbcf41806549a6dcf8874b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQABEM7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvPSGVAUJ8k5dpqDMgph%2BFz%2Bat791Sfllxk4JJ8AOt3gIhAK1T6HLDZpR2WTkwNYngPf5rXIgExjbf0dS5K0iE1BSpKv8DCFMQABoMNjM3NDIzMTgzODA1IgxoMCfwSP0JbFyfiUIq3AOR7zTuIAwCtInBtnchQ5YUEPtbV05Z71SjuKYK0A9%2F7cHbQHPg%2FbsIIPkuiHUteAzfsmA%2Fg8qbMpHxIOMzo3bUqbg7qtAV2aVtd49EbDH54TCYvpnzEr%2FRc%2FVGm5%2FP3IXp9RFQODR2gVhdLBlC1ZdmOfJox0aaF7UVVLon8hufMBVStfQKMvNt%2B%2Fd%2BY2k%2B3HYOBSuJjQqVtD8SZMxKPXP7Ay9YHCuYP13cPDrAIWfmpSs5%2BVScn%2BNNnNw4KRGv2Czxn5Zr%2FDxrT2zIjR%2BkyFT95tP8P%2FqpZ%2FBxPYWEQqX2ZYIy650p12CMmwsio0rBI3Y7kdZOIgzKqtAv8MLmc5rXBesNObr2C0aTykweOthw%2BBCHaDxYG1excL544LvY5ilvqUiANNhZk31DVWsPsNi%2BcEACccXt%2FbKMJIsXlA85L4sivkTKIB06i5AVPq%2B1rSm2ABa1kqkydY5UjERKy%2BLosUVNnACF%2BOBo2S2pJyb5oiI44ySeSyEeX%2FIhGCU7IbKZBdulR8LNy2gcJDnfb14DGJ7bNKfEzz3eFR9KydPS4IaWnaTxGs4YQO6Esa0ht3q%2BWwkSulLFo3ATwMEsGJO3KFDRYsU%2B6%2BixFtwMhJtITHYVE%2BzLBn0WCzzqBTDzo%2FrEBjqkAdPJyQr1rSJmTnoMKqkX%2BDRF5WMRUSibnkpt0OFXmetQM8roO%2BhdTvPUWiVx8BBhdBv524kEfVjtuR1zwx41vD04lIAMbEGgwvzT%2BJEM30NC3RIh30CSAJ%2BZsTVjmcoMUQt791PDIr3p8HlQFNkkRQNlsH7yPZKApXg09MNAPVWkSBixnJX3ekKMly4pD8LvXCwt56rAFTxkER5kfbaYNZFTa3W%2F&X-Amz-Signature=ae9581a9879a62c9618fffae64847da0b7914c9c66c1ef266af542b8aebee906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
