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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQC2BDAC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDM5uX25UFvJLhRQyRNzV6wmn3VPVRepM49P4yx%2BIX9vAiEAyRGKhka8kIqnnIwQji4FfA7KBSU2%2BgMO0o8zpas9rw0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEYBk58DH1kW39IcgircA70e07EajkuzLP8cwxrN7JMgDGdwMSXh%2BxBRhdgMIbzz9YCUMTsqNQYtEIPRQhAbVS%2Bu%2B8N%2BofUyT8%2FwmBlRyoQVZHurEjApZWGa0ZnR1lSFo%2FcWBIA2mR6jvKHsMNtReV%2BVo1lcuBn8ZfrAhHoKXkdmcwX5leJ9UqnXn0e4WZ%2BM2H79J4jtnZh5mXTRwa2LyEWJmGxt8iZskO7hP2rBNrs9%2BhQx98lRzS9czrQkihyShtqEdbwDV%2BniyIqqhJPUuu0r%2FYypqay6SJHfp5cUS6TFgyNbTv3E9muSBMFB6DQcptWalyVu1C5m9BnpwamCyuG2pl28PGHWdxxevlj6Ljp3ee6TTHzJRtPCayV%2FeLAgdgm73KEI4v7v25CkNKSVqKbfSTqjXjNlpH9T9UtZvDStc1MhaeSdzqdsHWz4LUyepMjKN%2FJo9B3p3Fq0206Kgodc95InhNma8nQKe2SxqGmC%2FrCUIoGeedZ6BDTKDHoFBYkeBHpdnj8mHswpMjMjTldKcBisa88B2udZ5Cg%2BIxWSNG2oPh%2BlORntBxdvYFggSX3gE3qoJhNf6NYe65kg93BJjNKEApJMvjm0A89CHkGwLWrg4kTaYlHlskx20YGDUdTp5vQQQ2polwdNMJiSjcIGOqUBEOV5l%2FbAZGVM5hla9wSZXf8J4byyuDXDr88EkczjgaqkbYg0ii6cb178QTs4vDO4Dx9ribuY2nK6IwYTtfiOTkuP%2F3HAHxUXhunmSxR5nK5%2FxeMD6MqZ%2BwEartHFiK5U251ymJ2uw7%2BC4hfVwUelCNIymJqLO78mk%2BQR8HfJcgOu0jW5Z6vjLFHHbH4bxjNST2wQ3llYHA6p74J40uf9r16%2F9iUG&X-Amz-Signature=11d683f6bea085875d60ad486034bb7a484e0e2f3887be4378bb7a77d42ea624&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQC2BDAC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDM5uX25UFvJLhRQyRNzV6wmn3VPVRepM49P4yx%2BIX9vAiEAyRGKhka8kIqnnIwQji4FfA7KBSU2%2BgMO0o8zpas9rw0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEYBk58DH1kW39IcgircA70e07EajkuzLP8cwxrN7JMgDGdwMSXh%2BxBRhdgMIbzz9YCUMTsqNQYtEIPRQhAbVS%2Bu%2B8N%2BofUyT8%2FwmBlRyoQVZHurEjApZWGa0ZnR1lSFo%2FcWBIA2mR6jvKHsMNtReV%2BVo1lcuBn8ZfrAhHoKXkdmcwX5leJ9UqnXn0e4WZ%2BM2H79J4jtnZh5mXTRwa2LyEWJmGxt8iZskO7hP2rBNrs9%2BhQx98lRzS9czrQkihyShtqEdbwDV%2BniyIqqhJPUuu0r%2FYypqay6SJHfp5cUS6TFgyNbTv3E9muSBMFB6DQcptWalyVu1C5m9BnpwamCyuG2pl28PGHWdxxevlj6Ljp3ee6TTHzJRtPCayV%2FeLAgdgm73KEI4v7v25CkNKSVqKbfSTqjXjNlpH9T9UtZvDStc1MhaeSdzqdsHWz4LUyepMjKN%2FJo9B3p3Fq0206Kgodc95InhNma8nQKe2SxqGmC%2FrCUIoGeedZ6BDTKDHoFBYkeBHpdnj8mHswpMjMjTldKcBisa88B2udZ5Cg%2BIxWSNG2oPh%2BlORntBxdvYFggSX3gE3qoJhNf6NYe65kg93BJjNKEApJMvjm0A89CHkGwLWrg4kTaYlHlskx20YGDUdTp5vQQQ2polwdNMJiSjcIGOqUBEOV5l%2FbAZGVM5hla9wSZXf8J4byyuDXDr88EkczjgaqkbYg0ii6cb178QTs4vDO4Dx9ribuY2nK6IwYTtfiOTkuP%2F3HAHxUXhunmSxR5nK5%2FxeMD6MqZ%2BwEartHFiK5U251ymJ2uw7%2BC4hfVwUelCNIymJqLO78mk%2BQR8HfJcgOu0jW5Z6vjLFHHbH4bxjNST2wQ3llYHA6p74J40uf9r16%2F9iUG&X-Amz-Signature=f260740a6397fcc694e8d5390d9b0fa73f58fd231f5dde0b35ffdcf17752ce3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
