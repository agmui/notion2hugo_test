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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGRZJNF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7wdONnRi1a%2FQu0Ox8C7G7dXDakH%2FGZAMPzztN6xcSmAiEAt0PVQ2A508Mt%2FZv2I5jMKNRx%2FRQuR6ZtvFHPws%2FmMY0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGLqWWhTc9F4WWhWsircAys0KloqJ%2BRFlY6YdxtYoAdf31iTAojJQNuXL6jgO9UO0kMm8uhJTTOxYDdzxnHlD4pTEBV5C7Tbr%2B5dwKCdx3uEi9QLqv87VOvz8mVRMGjUS4yU4W27lj%2BjIbnDzfByvFltcgO2mM5zI9g8F6DoVKsaYBg2xAxTpyIikRn9npFJtQLAWw1d4I0oOmakkwpdmcWBsKlx1VjdaJg6Q8w6SnWsP83xYg2Xj4%2BxQWVsnm5pAqHoygrcOfnJTWdNapMVviCzb3MCqQ9XYHX6hJ8tclxXvc8%2BQNGz6Mqi7Jf7xoJXTVCM%2FxhdF%2BcyPogGHQEeZm0uIdA4VKqhwWSswxy7uXjIlYcDuwiArl7CIi1VZINGJzd7hrQZf9n%2FHgp8Zi6NRhGCWz6jhF4S1V10%2FyIXTkGWtAqNGRrEb3%2F1gg25UIrw0GthSjU5GdsFBcsQ4F0RMuDrKbDDFeMwZXRjcexGNHbIl55D%2F5H6iO%2FIhg1Cw3P%2FZWesTFoWjIeSaocIZ2ku4D458S6lXQ7Jb9vidDe4ICKWJxHMSPxSCMUpgKqjNNsGSeN9iPml1nuQ1Yejd638eJNydBflb1IMFgu9T%2FIOiIHoMIJd3%2FZ6YXf7SUfkTKP8NpCYCvjR1NrT5TcqMJSs%2Fr8GOqUB6mQ6bvvqOtdcmnCxRDSV5tbCALTxjzLMEmEKYv%2BFdN0A1Fxhlylax7k8Ahuf2IbUVSS8ny4aEeYzdd9XKQuPcqYruHG1b8WIO1IUy0Ba3F1ezRdEMzmHsFSNZ1mMAF5jeLNpH71xnDblzngDfr4%2BicQ%2FfoLJ2BFRpGATT7kC7pAzfxszo6YweXU249PbGNGN2yEsZPZnit5bg4fu7fy6%2BrAx64La&X-Amz-Signature=896d321785cbac7ed9c0edf9a4dc2616c7c6cca257c195a35b2828d1c3cb61db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGRZJNF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7wdONnRi1a%2FQu0Ox8C7G7dXDakH%2FGZAMPzztN6xcSmAiEAt0PVQ2A508Mt%2FZv2I5jMKNRx%2FRQuR6ZtvFHPws%2FmMY0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGLqWWhTc9F4WWhWsircAys0KloqJ%2BRFlY6YdxtYoAdf31iTAojJQNuXL6jgO9UO0kMm8uhJTTOxYDdzxnHlD4pTEBV5C7Tbr%2B5dwKCdx3uEi9QLqv87VOvz8mVRMGjUS4yU4W27lj%2BjIbnDzfByvFltcgO2mM5zI9g8F6DoVKsaYBg2xAxTpyIikRn9npFJtQLAWw1d4I0oOmakkwpdmcWBsKlx1VjdaJg6Q8w6SnWsP83xYg2Xj4%2BxQWVsnm5pAqHoygrcOfnJTWdNapMVviCzb3MCqQ9XYHX6hJ8tclxXvc8%2BQNGz6Mqi7Jf7xoJXTVCM%2FxhdF%2BcyPogGHQEeZm0uIdA4VKqhwWSswxy7uXjIlYcDuwiArl7CIi1VZINGJzd7hrQZf9n%2FHgp8Zi6NRhGCWz6jhF4S1V10%2FyIXTkGWtAqNGRrEb3%2F1gg25UIrw0GthSjU5GdsFBcsQ4F0RMuDrKbDDFeMwZXRjcexGNHbIl55D%2F5H6iO%2FIhg1Cw3P%2FZWesTFoWjIeSaocIZ2ku4D458S6lXQ7Jb9vidDe4ICKWJxHMSPxSCMUpgKqjNNsGSeN9iPml1nuQ1Yejd638eJNydBflb1IMFgu9T%2FIOiIHoMIJd3%2FZ6YXf7SUfkTKP8NpCYCvjR1NrT5TcqMJSs%2Fr8GOqUB6mQ6bvvqOtdcmnCxRDSV5tbCALTxjzLMEmEKYv%2BFdN0A1Fxhlylax7k8Ahuf2IbUVSS8ny4aEeYzdd9XKQuPcqYruHG1b8WIO1IUy0Ba3F1ezRdEMzmHsFSNZ1mMAF5jeLNpH71xnDblzngDfr4%2BicQ%2FfoLJ2BFRpGATT7kC7pAzfxszo6YweXU249PbGNGN2yEsZPZnit5bg4fu7fy6%2BrAx64La&X-Amz-Signature=0c076f2d7d28b1545ef5f19f87a92f94abf35f203b55eb6627dfeb9dcb231d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
