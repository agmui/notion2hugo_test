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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RSQLTL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEWgZYe2df1Ish9aZDVK1HGDN4jepput%2FfCpK9o5RwQBAiAIcaBDzZ2W9uVrqlcAPZgs6z2HZgWL%2BZOJ31GcXywEiSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMZA9h3QcFPhbqXhAmKtwD1J97e8MbRMEf5LYrcuXR8jjDPWrWQnkMXwEksOuRLrA4UxHIT2yh23ddzq4gly54htQvVzRJ21Po%2FM6cMdlGsRuLuZGLpfr9SasJXgYyGbDG%2BSqPQIp1%2BW0sH44m9YfuxmJGlLoSzPvNGNRP%2BqpKmm7lN4tzhQMYwm7pWE5snK5nbGUsVNCPAMuY6XX54RouQB9nxTG%2FzbG2IE%2FkV%2FyltOS0mWbHUeD8j74CpVKRrJjGd7PhXoT2hBaGekKHUK2adZ1Ll7P5vyYlkvwkB1XXOrIJojVrxWvy%2F5uqhfTpbdzbAILyRaJf4JNvJCfHl%2F0AmelfFlyoXd0wuNi%2BOZbUzLkmWbbH4hz2zp9jb%2FAnnyLWxzfyCKu%2FHzLb2Ssby3yNZZ4ZTjOMD%2BknnzWZf7itvRMd%2BL9PrQgwPFO3DgnXPSSQLY%2BcieK4J%2BBEUuDZkNxUDFZTnXGaPm0gGRoXRZRx8FSEXrL%2BTDoYmoslg4K%2Fqh8xlN61OCWsLS28reT6mV53bSubo%2FSWUY4K4K0PY6z0jSQ9TqPAK6dCeqTFcMrOer%2FFe9R%2FEnA%2B5S6q3HACpjO3vmH4uh4q0IE9JKuuzHaJcNTuX7EGnL0n5NPN%2BGhL3vq4kmsS2wmHUgjYdcAwmZDvwgY6pgHSGs%2FeBMcm4Rzq3Pz8RyS7i58jMkhy0nT%2B%2Flpbfxk5Qwk7vi8yEO33GqOXPeI1MXEVW6yg7elepL779SoZQYUQy0cHvOb2oTFACRcH4Te%2BGcB8HuSR6KDO4CBHDTZPfhQBrszYkrZ6ben9D9t1bXlmNXgeCK372AhHBD1i%2FBhzXziMe48uaOElCXRz%2F0JMUmv76ua04RAUaE9SghLjrU8GrRRvjKjM&X-Amz-Signature=450936f280d97b80f64034bee30a84c5326193c24ea6ba55933563d13fff3730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RSQLTL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEWgZYe2df1Ish9aZDVK1HGDN4jepput%2FfCpK9o5RwQBAiAIcaBDzZ2W9uVrqlcAPZgs6z2HZgWL%2BZOJ31GcXywEiSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMZA9h3QcFPhbqXhAmKtwD1J97e8MbRMEf5LYrcuXR8jjDPWrWQnkMXwEksOuRLrA4UxHIT2yh23ddzq4gly54htQvVzRJ21Po%2FM6cMdlGsRuLuZGLpfr9SasJXgYyGbDG%2BSqPQIp1%2BW0sH44m9YfuxmJGlLoSzPvNGNRP%2BqpKmm7lN4tzhQMYwm7pWE5snK5nbGUsVNCPAMuY6XX54RouQB9nxTG%2FzbG2IE%2FkV%2FyltOS0mWbHUeD8j74CpVKRrJjGd7PhXoT2hBaGekKHUK2adZ1Ll7P5vyYlkvwkB1XXOrIJojVrxWvy%2F5uqhfTpbdzbAILyRaJf4JNvJCfHl%2F0AmelfFlyoXd0wuNi%2BOZbUzLkmWbbH4hz2zp9jb%2FAnnyLWxzfyCKu%2FHzLb2Ssby3yNZZ4ZTjOMD%2BknnzWZf7itvRMd%2BL9PrQgwPFO3DgnXPSSQLY%2BcieK4J%2BBEUuDZkNxUDFZTnXGaPm0gGRoXRZRx8FSEXrL%2BTDoYmoslg4K%2Fqh8xlN61OCWsLS28reT6mV53bSubo%2FSWUY4K4K0PY6z0jSQ9TqPAK6dCeqTFcMrOer%2FFe9R%2FEnA%2B5S6q3HACpjO3vmH4uh4q0IE9JKuuzHaJcNTuX7EGnL0n5NPN%2BGhL3vq4kmsS2wmHUgjYdcAwmZDvwgY6pgHSGs%2FeBMcm4Rzq3Pz8RyS7i58jMkhy0nT%2B%2Flpbfxk5Qwk7vi8yEO33GqOXPeI1MXEVW6yg7elepL779SoZQYUQy0cHvOb2oTFACRcH4Te%2BGcB8HuSR6KDO4CBHDTZPfhQBrszYkrZ6ben9D9t1bXlmNXgeCK372AhHBD1i%2FBhzXziMe48uaOElCXRz%2F0JMUmv76ua04RAUaE9SghLjrU8GrRRvjKjM&X-Amz-Signature=56d82f3d51dc8f4c24bb821733772732dbfd6a37a245169a1db1f8940127c3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
