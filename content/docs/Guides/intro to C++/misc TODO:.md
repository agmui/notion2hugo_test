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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZVSRZ4E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDzoPU%2FFLRQc7pHqqCSZY6eb6Gq8uOqcGGxLEtk%2BWTrnAiBf9FGp7FchnQEmfB87wvAYz%2Fbxl56gr%2FyVzJaurgkegiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaEsAvHfZVv6mzL%2FpKtwDORe5%2B2zuaTqhKO6zoXD8o3xvrloIb2PouiT64bjUV8MPTkgZL9RBh%2FSTbeh3bECOWKFQqo0lcICuiY%2FMgS1dUoiQxXXdI6MEwYS%2FInA9PHspZBwQ9NbRJW%2BQkQ9JgcGnEOSo0EG55kMVx1PjIAm4fIk7vhKDcYJzfFLhhAiqo70IG2Zs6axo2OPMVzU1t3ZZkqgd3%2FLwtgJCTERWMC4n%2FSXMl2Dxb7M4aMDJxMvC5fzAPLcz%2F8Q8K5lt1ZGNCxJwtt01%2BmR8%2Fk%2BlBjyKf9y%2FY6KyNS%2B5mgPPeeWAZM%2FPbhLtlXuErg%2BrgB5Xy5HjXVu4lQeZUGGUAJal9ebCx1c2LvCKw69YglzEqm9LDbHtXYVszGOBOGWg3H8%2FtYCaiKFITvog3TwV3a0hQS8QMlLu3IAjwX8wPChs3Q8b%2FUaloJGnxdNECxa2jEBGJIsOyEmtqBxitiIs%2FbDhKa47KgSubH35JJCMrIm8wJ%2FSScI0Wdn8d%2Bknw%2FMGBfWZgDwYx4lZu1cnLxT1oIPAzEMQcMTFgqu7NnYSqhi5T2DyylGDnhbpXO%2Ft5k11Dl7w7tyeh0zzxrHflk5vGh%2FD6XlpV65SXxENlXYq6DQ%2B3Ydt%2BRX1NqPGZPYeCChLlqYJ2dAwy7T2wQY6pgF0bPXGgcfQWJGEJBVq54zayRsgYCE2Uta3cRj9ntdsNuTjxLk0Fn6f77TQVkua3OihjESANdCz8rvozxjb4G4UWZcbT5TIbPKdPzq2WFoEwmUmK%2BvzJmYeysen%2FbzQ8Wg6W6o1H9c65YPMPQpeyxOnYhbraCHIoC2xgtnOS8hxE2Pcbla5XYkrMw4ldYXxTXpJn1Hw9ZrGqWP5t0bgscCUTkynj%2Bzw&X-Amz-Signature=7dc7a95b126797944d4a5ddd5d4c64b84c6b0aefc59ee997e5273370ea3a407b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZVSRZ4E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDzoPU%2FFLRQc7pHqqCSZY6eb6Gq8uOqcGGxLEtk%2BWTrnAiBf9FGp7FchnQEmfB87wvAYz%2Fbxl56gr%2FyVzJaurgkegiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaEsAvHfZVv6mzL%2FpKtwDORe5%2B2zuaTqhKO6zoXD8o3xvrloIb2PouiT64bjUV8MPTkgZL9RBh%2FSTbeh3bECOWKFQqo0lcICuiY%2FMgS1dUoiQxXXdI6MEwYS%2FInA9PHspZBwQ9NbRJW%2BQkQ9JgcGnEOSo0EG55kMVx1PjIAm4fIk7vhKDcYJzfFLhhAiqo70IG2Zs6axo2OPMVzU1t3ZZkqgd3%2FLwtgJCTERWMC4n%2FSXMl2Dxb7M4aMDJxMvC5fzAPLcz%2F8Q8K5lt1ZGNCxJwtt01%2BmR8%2Fk%2BlBjyKf9y%2FY6KyNS%2B5mgPPeeWAZM%2FPbhLtlXuErg%2BrgB5Xy5HjXVu4lQeZUGGUAJal9ebCx1c2LvCKw69YglzEqm9LDbHtXYVszGOBOGWg3H8%2FtYCaiKFITvog3TwV3a0hQS8QMlLu3IAjwX8wPChs3Q8b%2FUaloJGnxdNECxa2jEBGJIsOyEmtqBxitiIs%2FbDhKa47KgSubH35JJCMrIm8wJ%2FSScI0Wdn8d%2Bknw%2FMGBfWZgDwYx4lZu1cnLxT1oIPAzEMQcMTFgqu7NnYSqhi5T2DyylGDnhbpXO%2Ft5k11Dl7w7tyeh0zzxrHflk5vGh%2FD6XlpV65SXxENlXYq6DQ%2B3Ydt%2BRX1NqPGZPYeCChLlqYJ2dAwy7T2wQY6pgF0bPXGgcfQWJGEJBVq54zayRsgYCE2Uta3cRj9ntdsNuTjxLk0Fn6f77TQVkua3OihjESANdCz8rvozxjb4G4UWZcbT5TIbPKdPzq2WFoEwmUmK%2BvzJmYeysen%2FbzQ8Wg6W6o1H9c65YPMPQpeyxOnYhbraCHIoC2xgtnOS8hxE2Pcbla5XYkrMw4ldYXxTXpJn1Hw9ZrGqWP5t0bgscCUTkynj%2Bzw&X-Amz-Signature=93b2fcdb723c72d10436702564eddfd8d933ae6d2928f580404f8400915cd537&X-Amz-SignedHeaders=host&x-id=GetObject)

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
