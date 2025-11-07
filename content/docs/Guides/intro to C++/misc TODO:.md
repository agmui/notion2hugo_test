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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYDDMXO%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQhLtzk98MkExBjjmiEieuAsTWqzARSmuFNCjz9lr2zwIhAOcA3fla872skY9EBMbNhWM5jOv5vnh4EZ0CBND93iD%2FKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXnNryRoxcFU8DvLIq3ANN%2BnUoE%2FCBbiNKujCFLdRS4P1RP9iE%2F4pfnpcouUbLWHhUQ9CWpo93kPIp1Ks0WR0ThHeJAVO%2FRR2rvHjxvfO0A9534xLyYSN78x0gFetcPLZlkm1LqFXQnEqiQlUE9phnltN1lWLVhRzeHh9Nua%2F7uhTNrLEYwVvaRAsuCpS0A5Gpc9EppkGjID6x8mZkvo1ePGG%2BD6meLoOrazMTvWp5T6S2K9EOrsJoY%2BURl%2FHShkI7dUzTYRbh0ROprNq1M%2Bl91pv113jgIfK%2FOAWfo1lk%2BzfyKuxFtj58iN2fnXLDlnW6ayC74mQG%2BiwSOISkUfOhe4M3s74vMIYRQ%2FkxeUzBCOzwuS64%2F0P4W6cSq0teInAwTYh1kMCWRblWXKNPP7Q0TCu7CZZgl0q5DVQ7u0LZ0TMuMaOhmyeMNGgmbzvPyPiLSfjcLYS%2Fdzd28qwCre4zPb32ULwBhp2dT5Yeb45jwVJeeftOJiI7PqfCq%2BWjo1%2Bil3kUh7CXc%2FU0y9SYwkx6KIkr40QQ%2BRLOkCvtFSGVG345l0GlCRU2vbszlnmnE3U7k9UFPT%2BCoVrYR3BmrVGrrshTkSa2GBnnEqvnwh08CzyOMFJXrsxYjHqaUjbahjQ6eNKBNINIRTg7NTCml7XIBjqkAa5Rg4sxc9RWw6%2FgJ2278X7TF2A09TROLWQoT8GbD%2BvP62DdevBmW8SOl0HRqz8N9WLqwKDHfLuuSNlkp31CS3kWZXoIFYXtlQzhGOoG4lC%2B5W64q%2F%2BMHjbp4zY97RjA7qx5N6W6AYX0XILalQs92asmpEsBKIqg75Sea5b%2FHjVfg1rtd8UgNK789euJ7zunhLtOwPOcMIC2A%2FjwdNFNjVAN7w6h&X-Amz-Signature=f0e9a91215764b5e0ea189db4ab92937cd40e22872c6a4e1db1446340a7b02ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYDDMXO%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQhLtzk98MkExBjjmiEieuAsTWqzARSmuFNCjz9lr2zwIhAOcA3fla872skY9EBMbNhWM5jOv5vnh4EZ0CBND93iD%2FKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXnNryRoxcFU8DvLIq3ANN%2BnUoE%2FCBbiNKujCFLdRS4P1RP9iE%2F4pfnpcouUbLWHhUQ9CWpo93kPIp1Ks0WR0ThHeJAVO%2FRR2rvHjxvfO0A9534xLyYSN78x0gFetcPLZlkm1LqFXQnEqiQlUE9phnltN1lWLVhRzeHh9Nua%2F7uhTNrLEYwVvaRAsuCpS0A5Gpc9EppkGjID6x8mZkvo1ePGG%2BD6meLoOrazMTvWp5T6S2K9EOrsJoY%2BURl%2FHShkI7dUzTYRbh0ROprNq1M%2Bl91pv113jgIfK%2FOAWfo1lk%2BzfyKuxFtj58iN2fnXLDlnW6ayC74mQG%2BiwSOISkUfOhe4M3s74vMIYRQ%2FkxeUzBCOzwuS64%2F0P4W6cSq0teInAwTYh1kMCWRblWXKNPP7Q0TCu7CZZgl0q5DVQ7u0LZ0TMuMaOhmyeMNGgmbzvPyPiLSfjcLYS%2Fdzd28qwCre4zPb32ULwBhp2dT5Yeb45jwVJeeftOJiI7PqfCq%2BWjo1%2Bil3kUh7CXc%2FU0y9SYwkx6KIkr40QQ%2BRLOkCvtFSGVG345l0GlCRU2vbszlnmnE3U7k9UFPT%2BCoVrYR3BmrVGrrshTkSa2GBnnEqvnwh08CzyOMFJXrsxYjHqaUjbahjQ6eNKBNINIRTg7NTCml7XIBjqkAa5Rg4sxc9RWw6%2FgJ2278X7TF2A09TROLWQoT8GbD%2BvP62DdevBmW8SOl0HRqz8N9WLqwKDHfLuuSNlkp31CS3kWZXoIFYXtlQzhGOoG4lC%2B5W64q%2F%2BMHjbp4zY97RjA7qx5N6W6AYX0XILalQs92asmpEsBKIqg75Sea5b%2FHjVfg1rtd8UgNK789euJ7zunhLtOwPOcMIC2A%2FjwdNFNjVAN7w6h&X-Amz-Signature=f28e83ff73d38115ed0fb3459afd20aba99e4eba4d8047887c267c5274693797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
