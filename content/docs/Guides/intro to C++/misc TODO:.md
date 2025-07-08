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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKUOTEJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHaF1V6quI5NuwUyAw0ya79nv%2FPhC932q3AnzRSrIUE%2FAiEA8U2QcX88qConnDd3NpZFoh7Sv8OCsU676biBpZWCIpwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8ae7HzaaWE3MAUSrcAzYsm1%2F711xhtP9Ga5E2l3OilWUVvR18b7QfBDstoaSJXy8%2Fvwx%2Byn4ZP0JXxYqbMUA2yqNQIWO9gjM5kJwzAZ%2BvwF60856OMAPJcV54YV5mORrwtB39eLt4ivrWhb2O8ciynrzVkQ28ob9QMBrApH4DdAdq6LayBtM3OtBK%2Bv8uDtwol5DRZNUvpOqKSephXmWiMIkXMwGiEp68%2BtC%2FZjnPxYArOURSawOHQa7hCFgzKzCdUag8kInnVDE6PGP%2FfEfof%2BOgZwtfE7qiiq7wJH3CyjcSQPjSSad21rwrb8qoKGR0RAczCvrRgEmjYmev1UB51FzDJytaNFhb4FddEMS1Anr3oe6QUb3x1ks1quulWTP%2FdofYudE3ugac0WljSTq%2Bh3kgeLYQBzR25FTLoHeogxT1Z1V43fCo2Nr7j4Bg1nf6W2JTRVCCd3Ieg0NXx4Nl5cxOlpq8SgMZaejCxi%2BBeZSDW9J6IP0alLYmjRzvyviVqYir00z3Dg2ftyY%2BnMT9i0pZ7%2BiFT3MH4aOM403jmSsMxy4xhyNYGovN%2BJoIAycD0jD89eiLSdzKPa1mxfpGVxcFpiCWlWZTDGnFottbL6L9d%2B2%2FMd4MAVkLXu6AFrGvPriymWrTedFMMN6EssMGOqUBynNHkHGE4d37DsqaTqqwK8KMOgZoVKL9wfeXB1LUXck9rEqt68ZXOFZ%2B7gGowPS%2BR1O9NsUvD%2B5SxndmOLW7imDnomg%2F9yn1Dc6mX%2BUgv1K5GrzpUmBW4eYE8r3Bffp6qyaoYKvQhUETDzXRaLdjQH48FMbVUE5hUfw03L7NyxfbXikUdLFkU2ZtgSAtjGOoHj6w1Sez4dLVG9TqfS4UzH%2FGTZOt&X-Amz-Signature=3a2f5c67dc9745587556be5f76b895f591f7e7521b6c24fee0392de8bf03deeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKUOTEJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHaF1V6quI5NuwUyAw0ya79nv%2FPhC932q3AnzRSrIUE%2FAiEA8U2QcX88qConnDd3NpZFoh7Sv8OCsU676biBpZWCIpwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8ae7HzaaWE3MAUSrcAzYsm1%2F711xhtP9Ga5E2l3OilWUVvR18b7QfBDstoaSJXy8%2Fvwx%2Byn4ZP0JXxYqbMUA2yqNQIWO9gjM5kJwzAZ%2BvwF60856OMAPJcV54YV5mORrwtB39eLt4ivrWhb2O8ciynrzVkQ28ob9QMBrApH4DdAdq6LayBtM3OtBK%2Bv8uDtwol5DRZNUvpOqKSephXmWiMIkXMwGiEp68%2BtC%2FZjnPxYArOURSawOHQa7hCFgzKzCdUag8kInnVDE6PGP%2FfEfof%2BOgZwtfE7qiiq7wJH3CyjcSQPjSSad21rwrb8qoKGR0RAczCvrRgEmjYmev1UB51FzDJytaNFhb4FddEMS1Anr3oe6QUb3x1ks1quulWTP%2FdofYudE3ugac0WljSTq%2Bh3kgeLYQBzR25FTLoHeogxT1Z1V43fCo2Nr7j4Bg1nf6W2JTRVCCd3Ieg0NXx4Nl5cxOlpq8SgMZaejCxi%2BBeZSDW9J6IP0alLYmjRzvyviVqYir00z3Dg2ftyY%2BnMT9i0pZ7%2BiFT3MH4aOM403jmSsMxy4xhyNYGovN%2BJoIAycD0jD89eiLSdzKPa1mxfpGVxcFpiCWlWZTDGnFottbL6L9d%2B2%2FMd4MAVkLXu6AFrGvPriymWrTedFMMN6EssMGOqUBynNHkHGE4d37DsqaTqqwK8KMOgZoVKL9wfeXB1LUXck9rEqt68ZXOFZ%2B7gGowPS%2BR1O9NsUvD%2B5SxndmOLW7imDnomg%2F9yn1Dc6mX%2BUgv1K5GrzpUmBW4eYE8r3Bffp6qyaoYKvQhUETDzXRaLdjQH48FMbVUE5hUfw03L7NyxfbXikUdLFkU2ZtgSAtjGOoHj6w1Sez4dLVG9TqfS4UzH%2FGTZOt&X-Amz-Signature=4250fdeed357b35119c29fc4ad4661ef2fb8257d74948e674ac524f71b8c0604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
